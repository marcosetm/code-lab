# Spring Core

Fundamental module of Spring Framework that provides the core features such as:
- Inversion of Control (IoC): Manage object creation and dependencies through a container.
- Dependency Injection (DI): Inject required dependencies into objects automatically.
- Bean Lifecycle Management: Control how bean are created, initialized, and destroyed.

## Inversion of Control
Design principle where the control of creating and mapping objects is shifted from the program/code to the framework 
or container. 
- Promotes loose coupling
- Makes code more modular, testable, and maintainable

```java
@Component // marks class as a Bean and makes it available for injection
@Service
@Autowired // tell spring to inject a dependency
```
## Dependency Injection
Design pattern used in Spring to automatically provide objects (dependencies) that a class needs, rather than the 
class creating them itself.

Spring manage the dependencies and injects them where needed making the code:
- More modular
- Easier to test
- Loosely coupled

Example, instead of creating `Car` inside the `Driver` class, Spring inject `Car` into the `Driver` from outside.

## Coding - Constructor Injection
**Define Interface and Class**
- In the `src/main/java/com...` 
  - create an Interface 
  - create a Class to implement it

**Create Controller**
- Create a Controller 
  - make it a rest controller
  - expose an endpoint

### Spring Processing

```java
Coach theCoach = new CricketCoach();
DemoController = new DemoController(theCoach);
```

## Component Scanning
Spring will scan Java classes for annotations such as `@Component` and automatically register the beans in the 
Spring Container.

The `@SpringBootApplication` annotation in the `{name}Application` class is composed of other annotations that 
trigger certain events. The annotations are `@EnableAutoconfiguatiion`, `@ComponentScan` and `@Configuration`

This entry point scans the base package and sub-packages. Spring then register each as a bean in the ApplicationContext.

Any packages outside the `@SpringBootApplication` needs to be explicitly listed:

```java
@SpringBootApplication(
        scanBasePackages={
                "com.springboot,springcore",
                "com.springboot.util",
                "com.acme.cart"
        })
public class SpringcoreApplication { ... }
```

## Coding - Component Scanning
**Create packages**
- Create `/rest`
- Create `/common`
- Move controller to `/rest` and refactor
- Move interface and class into `/common` and refactor

## Setter Injection
Inject dependencies by calling setter methods(s) on a class.
- Create the setter method
- Configure the dependency injection with `@Autowired` annotation

**Main Difference:**  
**Constructor injection** provides dependencies through a class constructor, ensuring they're available when the 
object is created.  
**Setter injection** provides dependencies through public setter methods, allowing optional or later injection.

## Coding - Setter Injection
**Create setter method**

**Configure the dependency**

## Qualifiers
Use the `@Qualifier` for multiple implementations.

## Coding - Qualifiers
**Create new class/component**
- create new classes in `/common`

**Add Qualifiers**
- update the controller constructor

## Primary
When there are multiple implementations, there can be only one primary designated

```java
@Component
@Primary
public class TennisCoach implements Coach {
  //...
}
```

**NOTE:** While you can mix `@Qualifier` and `@Primary`, the qualifier will take precedence. Best practice is to use 
the `@Qualifier`