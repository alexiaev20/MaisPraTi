// Programa para ordenar dois valores
let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));

if (valor1 < valor2) {
    console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`);
} else {
    console.log(`Valores em ordem crescente: ${valor2}, ${valor1}`);
}
