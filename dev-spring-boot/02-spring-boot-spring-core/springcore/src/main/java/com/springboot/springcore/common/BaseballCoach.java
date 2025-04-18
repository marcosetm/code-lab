package com.springboot.springcore.common;

import org.springframework.stereotype.Component;

@Component
public class BaseballCoach implements Coach {

    public BaseballCoach() {
        System.out.println(getClass().getSimpleName() + "  constructor");
    }

    @Override
    public String getDailyWorkout() {
        return "Baseball Coach";
    }
}
