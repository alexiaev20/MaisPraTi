const prompt = require('prompt-sync')();

function classificarNota(nota) {
    if (nota >= 7 && nota <= 10) {
        console.log("Aprovado");
    } else if (nota > 5 && nota < 7) {
        console.log("Recuperação");
    } else if (nota >= 0 && nota <= 5) {
        console.log("Reprovado");
    } else {
        console.log("Nota inválida. Deve estar entre 0 e 10.");
    }
}

const nota = parseFloat(prompt('Digite a nota (0 a 10): '));
classificarNota(nota);
