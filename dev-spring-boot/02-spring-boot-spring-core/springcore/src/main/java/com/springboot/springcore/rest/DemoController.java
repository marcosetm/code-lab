package com.springboot.springcore.rest;

import com.springboot.springcore.common.Coach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    // define private field for DI
    private final Coach theCoach;

    @Autowired
    public DemoController(Coach theCoach) {
        this.theCoach = theCoach;
    }

    // setter injection example
    // @Autowired
    // public void setCoach(Coach theCoach) {
    //     this.theCoach = theCoach; // this.theCoach cannot be a final type
    // }

    @GetMapping("/dailyworkout")
    public String getDailyWorkout() {
        return theCoach.getDailyWorkout();
    }
}
