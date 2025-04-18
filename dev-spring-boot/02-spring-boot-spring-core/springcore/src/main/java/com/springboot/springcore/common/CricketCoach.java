package com.springboot.springcore.common;

import org.springframework.stereotype.Component;

@Component
public class CricketCoach implements Coach {

    public CricketCoach() {
        System.out.println(getClass().getSimpleName() + "  constructor");
    }

    @Override
    public String getDailyWorkout() {
        return "Cricket Coach!";
    }
}
