package com.springboot.springcore.config;

import com.springboot.springcore.common.Coach;
import com.springboot.springcore.common.SwimCoach;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SportsConfig {

    @Bean
    public Coach swimCoach() {
        return new SwimCoach();
    }
}
