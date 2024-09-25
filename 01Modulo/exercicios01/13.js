// Programa para calcular a média de números decimais
let soma = 0;
let contador = 0;

while (true) {
    let numero = parseFloat(prompt("Digite um número decimal (ou 0 para sair):"));
    if (numero === 0) break;
    soma += numero;
    contador++;
}

if (contador > 0) {
    let media = soma / contador;
    console.log(`A média aritmética é ${media.toFixed(2)}.`);
} else {
    console.log("Nenhum número foi digitado.");
}
