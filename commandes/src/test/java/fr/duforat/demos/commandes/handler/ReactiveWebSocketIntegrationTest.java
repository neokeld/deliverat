package fr.duforat.demos.commandes.handler;

import java.net.URI;
import java.util.concurrent.atomic.AtomicLong;

import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import org.springframework.web.reactive.socket.client.ReactorNettyWebSocketClient;
import org.springframework.web.reactive.socket.client.WebSocketClient;

import fr.duforat.demos.commandes.CommandesApplication;

@SpringBootTest(classes = CommandesApplication.class)
public class ReactiveWebSocketIntegrationTest {

    private final WebSocketClient socketClient = new ReactorNettyWebSocketClient();

    @Test
    public void testNotificationsOnUpdates() throws Exception {

    	long durationInterval = 800;
        int countEmitedEvents = 2;
        long margin = 900;
        AtomicLong counter = new AtomicLong();
        URI uri = URI.create("ws://localhost:7000/event-emitter");

        socketClient.execute(uri, (WebSocketSession session) -> {

            return session
                .receive()
                .map(WebSocketMessage::getPayloadAsText)
                .doOnNext(str -> counter.incrementAndGet())
                .then()
                .log();

        }).subscribe();

        Thread.sleep(countEmitedEvents * durationInterval + margin);

        Assertions.assertThat(counter.get()).isEqualTo(countEmitedEvents);
    }
	
}
