package fr.duforat.demos.commandes.handler;

import java.time.Duration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import fr.duforat.demos.commandes.dto.Checkout;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component("ReactiveWebSocketHandler")
public class ReactiveWebSocketHandler implements WebSocketHandler {

    private static final long INTERVAL = 800L;
	private static final ObjectMapper json = new ObjectMapper();
    private Logger logger = LoggerFactory.getLogger(ReactiveWebSocketHandler.class);

    
    // Generate Flux of Json Events
    private Flux<String> eventFlux = Flux.generate(sink -> {
        try {
        	final String jsonStr = json.writeValueAsString(Checkout.fakeCheckoutsFactory());
        	logger.info(jsonStr);
            sink.next(jsonStr);
        } catch (JsonProcessingException e) {
            sink.error(e);
        }
    });

    // Emits each second a Json Event
    private Flux<String> intervalFlux = Flux.interval(Duration.ofMillis(INTERVAL))
      .zipWith(eventFlux, (time, event) -> event);

    // When a new connection is established
    // Send on web socket
    // A flux of Json Event converted to TextMessage
    // And
    // When a flux of inbound events has been received
    // convert them to text
    // and trace them in logs
    @Override
    public Mono<Void> handle(WebSocketSession webSocketSession) {
        return webSocketSession.send(intervalFlux
          .map(webSocketSession::textMessage))
          .and(webSocketSession.receive()
            .map(WebSocketMessage::getPayloadAsText).log());
    }
}
