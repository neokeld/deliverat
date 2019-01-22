package fr.duforat.demos.cartes.config;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RequestPredicates.POST;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import fr.duforat.demos.cartes.handler.CartesHandler;

@Configuration
public class CartesEndpointConfiguration {

		@Bean
		public RouterFunction<ServerResponse> routes(CartesHandler handler) {
				return route(GET("/cartes"), handler::all)
					.andRoute(POST("/cartes"), handler::create);
		}
		
}

