const prompt = require('prompt-sync')();

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    if (imc < 18.5) {
        return "Baixo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}
    const peso = parseFloat(prompt('Digite o peso em kg: '));
    const altura = parseFloat(prompt('Digite a altura em metros: '));

    const categoria = calcularIMC(peso, altura);
    console.log(`Seu IMC é ${peso / (altura * altura).toFixed(2)}, e você está na categoria: ${categoria}`);
