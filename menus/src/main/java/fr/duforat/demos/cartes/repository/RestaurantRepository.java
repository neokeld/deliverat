package fr.duforat.demos.cartes.repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Repository;

import fr.duforat.demos.cartes.domain.Restaurant;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public class RestaurantRepository implements ReactiveRepository<Restaurant> {
		
		private final List<Restaurant> restaurants;
		
		public RestaurantRepository() {
			this(Restaurant.fakeRestaurantFactory().prepareForSave(), Restaurant.fakeRestaurantFactory().prepareForSave());
		}
		
		public RestaurantRepository(Restaurant... restaurants) {
			this.restaurants = new ArrayList<>(Arrays.asList(restaurants));
		}
		
		@Override
		public Flux<Restaurant> findAll() {
			return Flux.fromIterable(restaurants);
		}

		@Override
		public Mono<Restaurant> save(Restaurant restaurant) {
			return Mono.just(restaurant.prepareForSave()).doOnNext(restaurants::add);
		}

		@Override
		public Flux<Restaurant> deleteAll() {
			this.restaurants.clear();
			return Flux.empty();
		}

	}