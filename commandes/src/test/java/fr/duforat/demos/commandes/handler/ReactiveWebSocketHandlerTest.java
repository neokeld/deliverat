package fr.duforat.demos.commandes.handler;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public class ReactiveWebSocketHandlerTest {

	@Before
	public void setUp() throws Exception {
	    MockitoAnnotations.initMocks(this);
	}
	
	@Test
    public void verifyCallToSendOnHandle() {
		 Mono<Void> sendReturn = Mono.empty();
		 Flux<WebSocketMessage> receiveReturn = Flux.empty();
         WebSocketSession session = Mockito.mock(WebSocketSession.class);
         Mockito.when(session.send(Mockito.any())).thenReturn(sendReturn);
         Mockito.when(session.receive()).thenReturn(receiveReturn);

         ReactiveWebSocketHandler textHandler = new ReactiveWebSocketHandler();

         // Pass the mocked session object here
         textHandler.handle(session);

         // Now you can verify if session.sendMessage() was called or not
         Mockito.verify(session, Mockito.times(1)).send(Mockito.any());
    }
	
	@Test
    public void verifyCallToReceiveOnHandle() {
		 Mono<Void> sendReturn = Mono.empty();
		 Flux<WebSocketMessage> receiveReturn = Flux.empty();
         WebSocketSession session = Mockito.mock(WebSocketSession.class);
         Mockito.when(session.send(Mockito.any())).thenReturn(sendReturn);
         Mockito.when(session.receive()).thenReturn(receiveReturn);

         ReactiveWebSocketHandler textHandler = new ReactiveWebSocketHandler();

         // Pass the mocked session object here
         textHandler.handle(session);

         // Now you can verify if session.sendMessage() was called or not
         Mockito.verify(session, Mockito.times(1)).receive();
    }
	
}
