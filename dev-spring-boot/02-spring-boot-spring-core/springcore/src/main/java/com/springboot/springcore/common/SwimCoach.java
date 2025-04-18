package com.springboot.springcore.common;

public class SwimCoach implements Coach {

    @Override
    public String getDailyWorkout() {
        return "Swim Coach!";
    }
}
