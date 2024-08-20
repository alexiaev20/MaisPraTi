const prompt = require('prompt-sync')();

function calcularSomaDeCincoNumeros() {
    let soma = 0;

    for (let i = 1; i <= 5; i++) {
        const numero = parseFloat(prompt(`Digite o ${i}º número: `));
        
        if (isNaN(numero)) {
            console.log("Entrada inválida. Por favor, digite um número válido.");
            i--; 
        } else {
            soma += numero;
        }
    }

    console.log(`A soma total dos 5 números é: ${soma}`);
}
calcularSomaDeCincoNumeros();
