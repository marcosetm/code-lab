# Spring Boot, Hibernate/JPA CRUD

| Property         | Value                               |
|------------------|-------------------------------------|
| **Project**      | Maven                               |
| **Language**     | Java                                |
| **Spring Boot**  | v3.4.4                              |
| **Packaging**    | Jar                                 |
| **Java Version** | 24                                  |
| **Dependencies** | - MySQL Driver<br>- Spring Data JPA |

## Initial Setup
- Setup the command liner `@Bean` in the app's entry point.
- Setup `application.properties` with DB connection

## JPA Annotations
1. Annotate Java Class
2. Develop Java code to perform database ops

#### Terminology
**ORM:** Object-to-Relational Mapping
**@Entity:** Java class that is mapped to a database table.
- Java Class > JPA > Database table
- Must have a `public` or `protected` no-arg constructor
- JPA Identity - Primary Key - maps to the database primary key and need annotation in Java code:

```java
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY) // mysql handles the id
@Column(name="id")
private int id;
// ...
```

#### Setup
1. Mapping class to database table
   * Use the `@Table(name="table_name")` annotation
2. Map fields to the database columns
   * `@Column(name="name_of_column)` - this is optional but best practice is to annotate. If you are not annotating, the name of the property is mapped to the DB column but changes can easily break this

## Coding - JPA Annotations
- Create a new package `entity`
  - Create a new class `Students` with fields mapped to columns, constructor, getter/setters, and toString()

## Data Access Object
App <-> DAO <-> Database
- Common design pattern
- DAO's need a JPA Entity manager
- JPA entity manager is the main component for saving/retrieving entities

DAO > Entity Manger > Datasource > Database
- JPA entity manager _needs_ a datasource (automatically created by Spring Boot based on the `applications.properties`)
- Data source defines the database connection info
- Gets autowired/injected into DAO 

#### JpaRepository vs EntityManager
- Interface for database access with minimal coding (provided by Spring Data)
- Difference?
  - Low-level abstraction and flex? `EntityManager`
  - Commonly used CRUD out of box `JpaRepository`
- Choice?
  - Depends but can use both

### Coding - DAO and saving with JPA
1. Define DAO interface
   * create new package `dao`
   * create new interface `StudentDAO`
2. Define DAO implementation (inject entity manager)
   * create new class `StudentDAOImpl`
   * Annotate with `@Repository`
   * Inject the `EntityManager` (create field and constructor and add `@Autowired`)
   * `@Override` the interface method and annotate with `@Transactional`
3. Update main app

DAO <-> Entity Manager <-> Data source <-> Database

**Notes:**
- `@Transactional` annotation provided by Spring (added to the method)
  - Automagically begin and end a transaction w/o the need to explicitly call it
- `@Repository` a sub-component (supports component scanning, translate JDBC exceptions)
  - Applied to DAO implementations 
