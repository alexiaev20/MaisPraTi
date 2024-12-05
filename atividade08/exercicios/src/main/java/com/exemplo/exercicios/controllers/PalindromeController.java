package com.exemplo.exercicios.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.exemplo.exercicios.utils.PalindromeUtil;

@RestController
@RequestMapping("/palindromo")
public class PalindromeController {

    @GetMapping
    public ResponseEntity<String> isPalindrome(@RequestParam String word) {
        // Usando o utilitário para verificar se a palavra é um palíndromo
        if (PalindromeUtil.isPalindrome(word)) {
            return ResponseEntity.ok(word + " é um palíndromo.");
        } else {
            return ResponseEntity.ok(word + " não é um palíndromo.");
        }
    }
}
