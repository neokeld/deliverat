# deliverat
Monorepo for the KataKafka

Learn Kafka connecting the microservices of an imaginary delivery service "Deliverat".

## Services Cartography

| Port | Service                          |
| ---- | -------------------------------- |
| 3000 | React Commande dev server        |
| 4000 | Json-server                      |
| 5000 | React Cuisto dev server          |
| 6000 | Websocker js dev server          |
| 7000 | Webflux websocket netty Commande |
| 8000 | Webflux rest netty Menus         |

## French Touch

Une commande is an order in French.

Cuisto is a slang word to say cuisinier which means a chef.

## Music
This repo was created listening to Asteroid - Time :guitar:

## Notes
In this part, we will do some clarifications on things often unknown about WebFluxTest in the functional style of declaring RouterFunction in Spring 5. It is a land still undiscovered !

The @WebFluxTest annotation does not support the testing of functional style RouterFunction, but only WebFlux annotated controllers (that use @Get/@Post endpoints). See this github issue : https://github.com/spring-projects/spring-boot/issues/10683
As seen is this issue, the implementation of @WebFluxTest can't detect RouterFunction beans (like @Controller classes) because in the new functional style implementation introduced in Spring 5 the RouterFunction is one or more simple beans that can be defined in @Configuration class.

The kizux user pointed out that WebTestClient.bindToApplicationContext can be use as a workaround.

An other example from Mario Gray can be seen here : https://www.sudoinit5.com/post/spring-boot-testing-producer/

I add that using @SpringBootTest(classes = MenusApplication.class) you will be able to use @Autowired in your test classes to access your functional route config and bind it to a WebTestClient with WebTestClient.bindToRouterFunction.

## Thanks
Spring Initializr for their useful tool to create Spring projects.

The underrated DiUS/java-faker that produce fun and useful data for demos.

## License

Copyright (c) 2018 Arnaud Duforat

See LICENSE file to know more (MIT License)

