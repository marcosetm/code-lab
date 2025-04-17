# Spring Core

Fundamental module of Spring Framework that provides the core features such as:
- Inversion of Control (IoC): Manage object creation and dependencies through a container.
- Dependency Injection (DI): Inject required dependencies into objects automatically.
- Bean Lifecycle Management: Control how bean are created, initialized, and destroyed.

## 1. Inversion of Control
Design principle where the control of creating and mapping objects is shifted from the program/code to the framework 
or container. 
- Promotes loose coupling
- Makes code more modular, testable, and maintainable

```java
@Component // marks class as a Bean and makes it available for injection
@Service
@Autowired // tell spring to inject a dependency
```
## 2. Dependency Injection
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