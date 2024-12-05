package com.exemplo.exercicios.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/calc")
public class CalculatorController {

    @GetMapping
    public ResponseEntity<String> calculate(
            @RequestParam double num1,
            @RequestParam double num2,
            @RequestParam char operator) {

        double result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 == 0) {
                    return ResponseEntity.badRequest().body("Erro: Divisão por zero!");
                }
                result = num1 / num2;
                break;
            default:
                return ResponseEntity.badRequest().body("Operador inválido!");
        }
        return ResponseEntity.ok("Resultado: " + result);
    }
}
