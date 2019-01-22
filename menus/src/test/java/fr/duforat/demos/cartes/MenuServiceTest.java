package fr.duforat.demos.cartes;

import java.math.BigDecimal;
import java.util.function.Predicate;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.util.StringUtils;

import fr.duforat.demos.cartes.domain.Menu;
import fr.duforat.demos.cartes.repository.MenuRepository;
import fr.duforat.demos.cartes.service.MenuService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

@Import({MenuService.class, MenuRepository.class})
@ExtendWith(SpringExtension.class)
public class MenuServiceTest {

		@Autowired
		private MenuService service;

		@Autowired
		private MenuRepository repository;
		
		@Test
		public void getAll() {
			Mono<Menu> p1 = repository.save(new Menu("Canard", "Du canard", new BigDecimal("14.00"), "//f.roocdn.com/images/menu_items/3905693/item-image.jpg", true));
			Mono<Menu> p2 = repository.save(new Menu("Armagnac", "Une boisson", new BigDecimal("30.00"), "//f.roocdn.com/images/menu_items/1583350/item-image.jpg", true));
			Mono<Menu> p3 = repository.save(new Menu("Chocolatine", "Une vienoiserie", new BigDecimal("0.80"), "//f.roocdn.com/images/menu_items/3905693/item-image.jpg", false));

			Flux<Menu> saved = Flux.concat(p1, p2, p3);
			
			Flux<Menu> composite = service.all().thenMany(saved);

			Predicate<Menu> match = menu -> saved.any(saveItem -> saveItem.equals(menu)).block();

			StepVerifier
					.create(composite)
					.expectNextMatches(match)
					.expectNextMatches(match)
					.expectNextMatches(match)
					.verifyComplete();
		}

		@Test
		public void save() {
				Mono<Menu> menuMono = this.service.create("Pâté", "De canard", new BigDecimal("4.90"), "//f.roocdn.com/images/menu_items/1583350/item-image.jpg", true);
				StepVerifier
					.create(menuMono)
					.expectNextMatches(saved -> StringUtils.hasText(saved.getId()))
					.verifyComplete();
		}

}