package com.exemplo.exercicios.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
@RequestMapping("/anagramas")
public class AnagramController {

    @GetMapping
    public ResponseEntity<String> isAnagram(
            @RequestParam String word1,
            @RequestParam String word2) {

        char[] arr1 = word1.toLowerCase().toCharArray();
        char[] arr2 = word2.toLowerCase().toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);

        if (Arrays.equals(arr1, arr2)) {
            return ResponseEntity.ok("As palavras são anagramas.");
        } else {
            return ResponseEntity.ok("As palavras não são anagramas.");
        }
    }
}
