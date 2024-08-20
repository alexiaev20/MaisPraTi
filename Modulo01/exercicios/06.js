const prompt = require('prompt-sync')();

function verificarTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {

        if (a === b && b === c) {
            return "Triângulo Equilátero";
        } else if (a === b || b === c || a === c) {
            return "node";
        } else {
            return "Triângulo Escaleno";
        }
    } else {
        return "Os lados fornecidos não formam um triângulo";
    }
}

const a = parseFloat(prompt('Digite o comprimento do lado A: '));
const b = parseFloat(prompt('Digite o comprimento do lado B: '));
const c = parseFloat(prompt('Digite o comprimento do lado C: '));

const tipoTriangulo = verificarTriangulo(a, b, c);
console.log(tipoTriangulo);
