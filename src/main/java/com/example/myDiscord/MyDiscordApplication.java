package com.example.myDiscord;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class MyDiscordApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyDiscordApplication.class, args);
	}

}
