package fr.duforat.demos.menus.service;

import java.math.BigDecimal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.duforat.demos.menus.domain.Menu;
import fr.duforat.demos.menus.repository.MenuRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class MenuService {

		private final MenuRepository menuRepository;
		private static final Logger log = LoggerFactory.getLogger(MenuService.class);
		
		public MenuService(@Autowired MenuRepository menuRepository) {
				this.menuRepository = menuRepository;
		}

		public Flux<Menu> all() {
				return this.menuRepository.findAll();
		}

		public Mono<Menu> create(String title, String desc, BigDecimal price) {
				return this.menuRepository
					.save(new Menu(title, desc, price))
					.doOnSuccess(menu -> log.info("New Event: {}", menu));
		}

}
