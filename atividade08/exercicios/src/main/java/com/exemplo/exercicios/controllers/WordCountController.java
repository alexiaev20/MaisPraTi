package com.exemplo.exercicios.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/contapalavras")
public class WordCountController {

    @GetMapping
    public ResponseEntity<String> countWords(@RequestParam String sentence) {
        if (sentence == null || sentence.trim().isEmpty()) {
            return ResponseEntity.badRequest().body("A frase não pode estar vazia!");
        }
        String[] words = sentence.trim().split("\\s+");
        return ResponseEntity.ok("Número de palavras: " + words.length);
    }
}
