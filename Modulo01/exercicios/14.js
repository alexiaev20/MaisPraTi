const prompt = require('prompt-sync')();

function calcularFatorial() {
    const numero = parseInt(prompt('Digite um número inteiro para calcular o fatorial: '), 10);

    if (isNaN(numero) || numero < 0) {
        console.log("Entrada inválida. Por favor, digite um número inteiro não-negativo.");
        return;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${numero} é: ${fatorial}`);
}

calcularFatorial();
