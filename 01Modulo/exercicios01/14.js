// Programa para calcular o fatorial de um número
function fatorial(n) {
    if (n === 0) return 1;
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));

if (numero < 0) {
    console.log("Fatorial não definido para números negativos.");
} else {
    let resultado = fatorial(numero);
    console.log(`O fatorial de ${numero} é ${resultado}.`);
}
