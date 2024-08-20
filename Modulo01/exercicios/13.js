const prompt = require('prompt-sync')();

function calcularMedia() {
    let soma = 0;
    let contagem = 0;
    let numero;

    do {
        numero = parseFloat(prompt('Digite um número decimal (ou 0 para sair): '));

        if (numero !== 0) {
            soma += numero;
            contagem++;
        }
    } while (numero !== 0);

    if (contagem === 0) {
        console.log("Nenhum número foi digitado.");
    } else {
        const media = soma / contagem;
        console.log(`A média aritmética dos números digitados é: ${media}`);
    }
}

calcularMedia();
