package com.spring.hibernatecrud;

import com.spring.hibernatecrud.dao.StudentDAO;
import com.spring.hibernatecrud.entity.Student;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class HibernatecrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(HibernatecrudApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(StudentDAO studentDAO) {
		return runner -> {
			createStudent(studentDAO);
		};
	}

	private void createStudent(StudentDAO studentDAO) {
		// create student
		System.out.println("Create student object");
		Student student = new Student("John", "Doe", "john.doe@springstudent.edu");

		// save student object
		System.out.println("Save student object");
		studentDAO.save(student);

		// display student id from database
		System.out.println("Student object created with ID: " + student.getId());
	}

}
