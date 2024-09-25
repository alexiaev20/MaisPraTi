// Programa para calcular o valor das maçãs
let quantidade = parseInt(prompt("Digite o número de maçãs compradas:"));

let preco = quantidade < 12 ? 0.30 : 0.25;
let total = quantidade * preco;

console.log(`O valor total da compra é R$ ${total.toFixed(2)}.`);
