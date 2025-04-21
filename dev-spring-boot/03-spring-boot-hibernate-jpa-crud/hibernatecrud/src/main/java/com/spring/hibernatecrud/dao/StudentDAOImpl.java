package com.spring.hibernatecrud.dao;

import com.spring.hibernatecrud.entity.Student;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class StudentDAOImpl implements StudentDAO {

    // define EntityManager field
    private final EntityManager entityManager;

    // define constructor and inject EntityManager
    @Autowired
    public StudentDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    // override/define save method

    @Override
    @Transactional
    public void save(Student student) {
        entityManager.persist(student);
    }
}
