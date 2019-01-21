package fr.duforat.demos.menus.config;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RequestPredicates.POST;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import fr.duforat.demos.menus.handler.MenuHandler;

@Configuration
public class MenuEndpointConfiguration {

		@Bean
		public RouterFunction<ServerResponse> routes(MenuHandler handler) {
				return route(GET("/menus"), handler::all)
					.andRoute(POST("/menus"), handler::create);
		}
		
}

