const prompt = require('prompt-sync')();

function calcularValorCompra(numeroMacas) {
    const precoMenosDeDoze = 0.30; 
    const precoPeloMenosDoze = 0.25; 

    if (numeroMacas < 12) {
        return numeroMacas * precoMenosDeDoze;
    } else {
        return numeroMacas * precoPeloMenosDoze;
    }
}

    const numeroMacas = parseInt(prompt('Digite o número de maçãs compradas: '), 10);

    if (isNaN(numeroMacas) || numeroMacas < 0) {
        console.log("Número de maçãs inválido. Digite um número inteiro não-negativo.");
    } else {

        const valorTotal = calcularValorCompra(numeroMacas);
        console.log(`O valor total da compra é R$ ${valorTotal.toFixed(2)}.`);
    }
