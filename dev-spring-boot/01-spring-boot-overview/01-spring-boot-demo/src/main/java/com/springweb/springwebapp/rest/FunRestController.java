package com.springweb.springwebapp.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FunRestController {

    // expose '/' and return 'Hello World'
    @GetMapping("/")
    public String hello() {
        return "Hello World";
    }
}
