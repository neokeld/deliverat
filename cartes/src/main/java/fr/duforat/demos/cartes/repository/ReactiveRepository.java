package fr.duforat.demos.cartes.repository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ReactiveRepository<T> {

	Flux<T> findAll();

	Mono<T> save(T item);

	Flux<T> deleteAll();

}