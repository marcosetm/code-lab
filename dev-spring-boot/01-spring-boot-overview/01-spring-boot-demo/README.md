## Spring Boot

### Project information:
| Property       | Value               |
|----------------|---------------------|
| Language       | Java                |
| Build Tool     | Maven               |
| Spring Boot    | v3.4.4              |
| Packaging      | Jar                 |
| Java Version   | 17                  |
| Dependencies   | Spring Web          |

### REST Controller
Specialized controller that handles HTTP requests and returns a JSON or XML. In this example, it'll return a string.
- `@RestController`
- `@GetMapping("/")`

### Spring Projects
Modules build on top  of Spring
- Cloud, Data 
- Batch, Security 
- Web Services, LDAP
- [spring.io/projects](https://spring.io/projects)

### Maven
- **Manages dependencies** (`pom.xml`)
- **Downloads packages (JARs)** from repositories (like PyPI)
- **Ensures version control** and reproducible builds
- **Compiles Java code**
- **Runs tests**
- **Packaging applications** (e.g., into `.jar` or `.war`)
- **Running lifecycle phases** (like clean, install, deploy)
- Generating documentation, reports, etc.

#### Project Structure
Provides a standard directory structure

Absolutely! Here's a **Markdown-style directory structure diagram** for a **standard Maven project**:

````
springwebapp/                             # Root project folder
├── pom.xml                         # Maven configuration file
└── src/
    ├── main/                       # Main application code
    │   ├── java/                   # Java source code
    │   │   └── com.springweb.springwebapp/
    │   │       └── rest/
    │   │           └── FunRestController.java
    │               └── service/
    │                   └── MyService.java
    │   └── resources/             # Configuration files, templates, static assets
    │       ├── application.properties
    │       └── static/
    │           └── style.css
    └── test/                      # Test source code
        ├── java/
        │   └── com/
        │       └── example/
        │           └── myapp/
        │               └── AppTest.java
        └── resources/             # Test resources (e.g., test configs, mock data)
````

**Notes:**
- `pom.xml`: Declares project dependencies, plugins, and build settings.
- `src/main/java`: Your main application Java code.
- `src/main/resources`: Config files like `application.properties`, `log4j.xml`, etc.
- `src/test/java`: JUnit (or other) test classes.
- `src/test/resources`: Resources needed during testing.

### Spring Boot 
The Framework will load resources on startup such as:
**/static contents**
**/templates content**  
**application.properties**
Using custom properties:
```java
@Value("${custom.property}")
private String customProperty;
```

### Spring Starters
Rather than creating your own mix of dependencies, a developer can use a Spring Starter such as Spring Initialzr. 
For example, this project uses Spring Web dependency which automatically adds `spring-boot-starter-web` which 
includes many dependencies suchs as REST, Tomcat, etc...

Source: [spring-boot-starters](https://github.com/spring-projects/spring-boot/blob/main/spring-boot-project/spring-boot-starters/README.adoc)

**IntelliJ Dependency Management:** View > Tools > Maven Projects > Dependencies

### Spring Boot DevTools
IntelliJ configuration
* Edit `pom.xml` and adde `spring-boot-devtools`
* Prefernces > Build, Execution, Deployment
* Build project automatically
* Advanced Settings > Allow to make auto-stop




