// Programa com menu interativo
function opcao1() {
    console.log("Você escolheu a opção 1.");
}

function opcao2() {
    console.log("Você escolheu a opção 2.");
}

function opcao3() {
    console.log("Você escolheu a opção 3.");
}

let escolha = parseInt(prompt("Escolha uma opção (1, 2 ou 3):"));

switch (escolha) {
    case 1:
        opcao1();
        break;
    case 2:
        opcao2();
        break;
    case 3:
        opcao3();
        break;
    default:
        console.log("Opção inválida.");
}
