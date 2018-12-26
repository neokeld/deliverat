package fr.duforat.demos.menus.handler;

import java.net.URI;

import fr.duforat.demos.menus.domain.Menu;
import fr.duforat.demos.menus.service.MenuService;

import org.reactivestreams.Publisher;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component
public class MenuHandler {

		private final MenuService menuService;

		public MenuHandler(MenuService menuService) {
				this.menuService = menuService;
		}

		public Mono<ServerResponse> all(ServerRequest r) {
				return defaultReadResponse(this.menuService.all());
		}

		public Mono<ServerResponse> create(ServerRequest request) {
				Flux<Menu> flux = request
					.bodyToFlux(Menu.class)
					.flatMap(toWrite -> this.menuService.create(
							toWrite.getTitle(),
							toWrite.getDescription(),
							toWrite.getPrice())
							);
				return defaultWriteResponse(flux);
		}

		private static Mono<ServerResponse> defaultWriteResponse(Publisher<Menu> menus) {
				return Mono
					.from(menus)
					.flatMap(p -> ServerResponse
						.created(URI.create("/menus/" + p.getId()))
						.contentType(MediaType.APPLICATION_JSON_UTF8)
						.build()
					);
		}

		private static Mono<ServerResponse> defaultReadResponse(Publisher<Menu> menus) {
				return ServerResponse
					.ok()
					.contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(menus, Menu.class);
		}

}
