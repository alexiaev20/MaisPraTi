package com.exemplo.exercicios.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
@RequestMapping("/jogo")
public class GuessingGameController {

    private final int secretNumber = new Random().nextInt(50) + 1;

    @GetMapping
    public ResponseEntity<String> guess(@RequestParam int guess) {
        if (guess == secretNumber) {
            return ResponseEntity.ok("Parabéns! Você adivinhou o número.");
        } else if (guess < secretNumber) {
            return ResponseEntity.ok("Errado! O número é maior.");
        } else {
            return ResponseEntity.ok("Errado! O número é menor.");
        }
    }
}
