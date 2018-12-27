package fr.duforat.demos.commandes.handler;

import java.net.URI;
import java.util.concurrent.atomic.AtomicLong;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import org.springframework.web.reactive.socket.client.ReactorNettyWebSocketClient;
import org.springframework.web.reactive.socket.client.WebSocketClient;

import fr.duforat.demos.commandes.CommandesApplication;
import reactor.core.publisher.Flux;

@SpringBootTest(classes = CommandesApplication.class)
public class ReactiveWebSocketIT {

    private final WebSocketClient socketClient = new ReactorNettyWebSocketClient();

    @Test
    public void testNotificationsOnUpdates() throws Exception {

        int emitedEventsNumber = 2;
        AtomicLong counter = new AtomicLong();
        URI uri = URI.create("ws://localhost:7000/event-emitter");

        socketClient.execute(uri, (WebSocketSession session) -> {

            return session
                .receive()
                .map(WebSocketMessage::getPayloadAsText)
                .doOnNext(str -> counter.incrementAndGet())
                .zipWith(Flux.range(1, emitedEventsNumber))
                .then()
                .log();

        }).block();

        Assertions.assertThat(counter.get()).isEqualTo(emitedEventsNumber);
    }
	
}
