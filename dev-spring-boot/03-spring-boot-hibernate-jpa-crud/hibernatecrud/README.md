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
