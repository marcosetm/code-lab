package com.springboot.springcore.common;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component
public class TrackCoach implements Coach {

    public TrackCoach() {
        System.out.println(getClass().getSimpleName() + " constructor");
    }

    @Override
    public String getDailyWorkout() {
        return "Track Coach";
    }
}
