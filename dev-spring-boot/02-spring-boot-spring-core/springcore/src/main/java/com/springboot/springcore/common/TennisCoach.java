package com.springboot.springcore.common;

import org.springframework.stereotype.Component;

@Component
public class TennisCoach implements Coach {

    public TennisCoach() {
        System.out.println(getClass().getSimpleName() + "  constructor");
    }

    @Override
    public String getDailyWorkout() {
        return "Tennis Coach";
    }
}
