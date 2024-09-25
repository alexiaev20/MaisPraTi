// Programa para calcular o IMC
let peso = parseFloat(prompt("Digite o peso (kg):"));
let altura = parseFloat(prompt("Digite a altura (m):"));

let imc = peso / (altura * altura);

let categoria;
if (imc < 18.5) {
    categoria = "Baixo peso";
} else if (imc < 24.9) {
    categoria = "Peso normal";
} else if (imc < 29.9) {
    categoria = "Sobrepeso";
} else {
    categoria = "Obesidade";
}

console.log(`Seu IMC é ${imc.toFixed(2)} e a categoria é ${categoria}.`);
