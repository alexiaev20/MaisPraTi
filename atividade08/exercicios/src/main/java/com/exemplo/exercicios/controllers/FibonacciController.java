package com.exemplo.exercicios.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/fibonacci")
public class FibonacciController {

    @GetMapping
    public ResponseEntity<List<Integer>> generateFibonacci(@RequestParam int n) {
        if (n <= 0) {
            return ResponseEntity.badRequest().body(null);
        }
        List<Integer> fibonacci = new ArrayList<>();
        int a = 0, b = 1;
        for (int i = 0; i < n; i++) {
            fibonacci.add(a);
            int next = a + b;
            a = b;
            b = next;
        }
        return ResponseEntity.ok(fibonacci);
    }
}
