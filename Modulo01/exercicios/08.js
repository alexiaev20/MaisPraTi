const prompt = require('prompt-sync')();

function exibirEmOrdemCrescente(valor1, valor2) {
    if (valor1 < valor2) {
        console.log(`Ordem crescente: ${valor1}, ${valor2}`);
    } else {
        console.log(`Ordem crescente: ${valor2}, ${valor1}`);
    }
}

const valor1 = parseFloat(prompt('Digite o primeiro valor: '));
const valor2 = parseFloat(prompt('Digite o segundo valor: '));

if (valor1 === valor2) {
    console.log("Os valores não devem ser iguais.");
} else {
    exibirEmOrdemCrescente(valor1, valor2);
}
