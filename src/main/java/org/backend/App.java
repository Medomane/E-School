package org.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication

public class App implements CommandLineRunner {
    final RepositoryRestConfiguration repositoryRestConfiguration;

    public App(RepositoryRestConfiguration repositoryRestConfiguration) {
        this.repositoryRestConfiguration = repositoryRestConfiguration;
    }

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

    }
}