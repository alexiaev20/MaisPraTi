const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número inteiro: '), 10);

if (isNaN(numero)) {
    console.log("Número inválido. Digite um número inteiro.");
} else {
    for (let i = 0; i < 10; i++) {
        console.log(numero);
    }
}
