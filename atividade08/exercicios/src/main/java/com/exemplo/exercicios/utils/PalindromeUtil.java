package com.exemplo.exercicios.utils;

public class PalindromeUtil {
    public static boolean isPalindrome(String word) {
        // Remove caracteres não alfabéticos e converte para minúsculo
        String cleanedWord = word.toLowerCase().replaceAll("[^a-zA-Z]", "");
        // Inverte a palavra
        String reversedWord = new StringBuilder(cleanedWord).reverse().toString();
        // Verifica se a palavra original é igual à invertida
        return cleanedWord.equals(reversedWord);
    }
}
