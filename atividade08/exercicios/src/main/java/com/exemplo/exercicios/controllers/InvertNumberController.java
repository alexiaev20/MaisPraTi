package com.exemplo.exercicios.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/inverter")
public class InvertNumberController {

    @GetMapping
    public ResponseEntity<String> invertNumber(@RequestParam int number) {
        String inverted = new StringBuilder(String.valueOf(number)).reverse().toString();
        return ResponseEntity.ok("Número invertido: " + inverted);
    }
}
