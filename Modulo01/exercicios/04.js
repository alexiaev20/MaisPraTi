const prompt = require('prompt-sync')();

function menu() {
    console.log("Escolha uma opção:");
    console.log("1. Exibir Mensagem");
    console.log("2. Calcular Soma de Dois Números");
    console.log("3. Mostrar Despedida");

    const escolha = parseInt(prompt('Digite o número da opção desejada: '), 10);

    switch (escolha) {
        case 1:
            console.log("Olá você está indo bem, continue!");
            break;
        case 2:
            const num1 = parseFloat(prompt('Digite o primeiro número: '));
            const num2 = parseFloat(prompt('Digite o segundo número: '));
            const soma = num1 + num2;
            console.log(`A soma de ${num1} e ${num2} é ${soma}.`);
            break;
        case 3:
            console.log("Obrigado por usar o menu! Até mais.");
            break;
        default:
            console.log("Opção inválida. Escolha um número entre 1 e 3.");
            break;
    }
}

menu();
