package fr.duforat.demos.menus.repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Repository;

import fr.duforat.demos.menus.domain.Menu;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public class MenuRepository implements ReactiveRepository<Menu> {
	
	private final List<Menu> menus;
	
	public MenuRepository() {
		this(Menu.fakeMenuFactory().prepareForSave(), Menu.fakeMenuFactory().prepareForSave());
	}
	
	public MenuRepository(Menu... menus) {
		this.menus = new ArrayList<>(Arrays.asList(menus));
	}
	
	@Override
	public Flux<Menu> findAll() {
		return Flux.fromIterable(menus);
	}

	@Override
	public Mono<Menu> save(Menu menu) {
		return Mono.just(menu.prepareForSave()).doOnNext(menus::add);
	}

	@Override
	public Flux<Menu> deleteAll() {
		this.menus.clear();
		return Flux.empty();
	}

}
