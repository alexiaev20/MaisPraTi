const prompt = require('prompt-sync')();

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} é par.`);
    } else {
        console.log(`${numero} é ímpar.`);
    }
}

const numero = parseInt(prompt('Digite um número inteiro: '), 10);
verificarParOuImpar(numero);
