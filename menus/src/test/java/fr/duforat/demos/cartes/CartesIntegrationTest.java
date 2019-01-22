package fr.duforat.demos.cartes;

import java.math.BigDecimal;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.WebTestClient;

import fr.duforat.demos.cartes.CartesApplication;
import fr.duforat.demos.cartes.config.CartesEndpointConfiguration;
import fr.duforat.demos.cartes.domain.Menu;
import fr.duforat.demos.cartes.handler.CartesHandler;
import reactor.core.publisher.Mono;

@SpringBootTest(classes = CartesApplication.class)
public class CartesIntegrationTest {

		@Autowired
	    private CartesEndpointConfiguration functionalRouteConfig;
		
		@Autowired
		private CartesHandler menuHandler;
		
		private static final Logger log = LoggerFactory.getLogger(CartesIntegrationTest.class);
		
		@Test
		public void getAll() {

				log.info("running  {}", this.getClass().getName());

				WebTestClient
					.bindToRouterFunction(functionalRouteConfig.routes(menuHandler))
					.build()
					.get()
					.uri("/cartes")
					.accept(MediaType.APPLICATION_JSON_UTF8)
					.exchange()
					.expectStatus().isOk()
					.expectHeader().contentType(MediaType.APPLICATION_JSON_UTF8)
					.expectBody()
					.jsonPath("$.[0].title").isEqualTo("test")
					.jsonPath("$.[1].title").isEqualTo("test");
		}

		@Test
		public void save() {
				Menu data = new Menu("test", "test", new BigDecimal("14.00"), "//f.roocdn.com/images/menu_items/1583350/item-image.jpg", true);
				MediaType jsonUtf8 = MediaType.APPLICATION_JSON_UTF8;
				WebTestClient
					.bindToRouterFunction(functionalRouteConfig.routes(menuHandler))
					.build()
					.post()
					.uri("/cartes")
					.contentType(jsonUtf8)
					.body(Mono.just(data), Menu.class)
					.exchange()
					.expectStatus().isCreated()
					.expectHeader().contentType(jsonUtf8);
		}

}
