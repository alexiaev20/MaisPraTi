const prompt = require('prompt-sync')();

function exibirTabuada() {
    const numero = parseInt(prompt('Digite um número para exibir a tabuada: '), 10);

    if (isNaN(numero)) {
        console.log("Entrada inválida. Por favor, digite um número válido.");
        return;
    }

    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

exibirTabuada();
