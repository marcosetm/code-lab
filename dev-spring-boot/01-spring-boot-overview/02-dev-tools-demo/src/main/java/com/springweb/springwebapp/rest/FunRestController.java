package com.springweb.springwebapp.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FunRestController {

    // expose endpoint '/' and return 'Hello World'
    @GetMapping("/")
    public String hello() {
        return "Hello World";
    }

    // expose endpoint "workout"
    @GetMapping("workout")
    public String getWorkout() {
        return "Running workout";
    }

    // expose endpoint "fortune"
    @GetMapping("fortune")
    public String getFortune() {
        return "Making it rain.";
    }
}
