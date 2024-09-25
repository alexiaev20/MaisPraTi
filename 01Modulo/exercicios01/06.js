// Programa para verificar e classificar triângulo
let A = parseFloat(prompt("Digite o lado A:"));
let B = parseFloat(prompt("Digite o lado B:"));
let C = parseFloat(prompt("Digite o lado C:"));

if (A < B + C && B < A + C && C < A + B) {
    let tipo;
    if (A === B && B === C) {
        tipo = "Equilátero";
    } else if (A === B || A === C || B === C) {
        tipo = "Isósceles";
    } else {
        tipo = "Escaleno";
    }
    console.log(`Os lados formam um triângulo ${tipo}.`);
} else {
    console.log("Os lados fornecidos não formam um triângulo.");
}
