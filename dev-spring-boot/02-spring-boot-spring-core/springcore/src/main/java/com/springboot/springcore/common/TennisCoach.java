package com.springboot.springcore.common;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)

public class TennisCoach implements Coach {

    public TennisCoach() {
        System.out.println(getClass().getSimpleName() + "  constructor");
    }

    @Override
    public String getDailyWorkout() {
        return "Tennis Coach";
    }
}
