package com.springboot.springcore.common;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
public class TennisCoach implements Coach {

    public TennisCoach() {
        System.out.println(getClass().getSimpleName() + "  constructor");
    }

    // define init
    @PostConstruct
    public void init() {
        System.out.println(getClass().getSimpleName() + "  init");
    }

    @PreDestroy
    public void destroy() {
        System.out.println(getClass().getSimpleName() + "  destroy");
    }

    @Override
    public String getDailyWorkout() {
        return "Tennis Coach";
    }
}
