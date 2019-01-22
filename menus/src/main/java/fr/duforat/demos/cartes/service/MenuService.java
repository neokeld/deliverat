package fr.duforat.demos.cartes.service;

import java.math.BigDecimal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.duforat.demos.cartes.domain.Menu;
import fr.duforat.demos.cartes.repository.MenuRepository;
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

		public Mono<Menu> create(String title, String desc, BigDecimal price, String picture, boolean popular) {
				return this.menuRepository
					.save(new Menu(title, desc, price, picture, popular))
					.doOnSuccess(menu -> log.info("New Event: {}", menu));
		}

}
