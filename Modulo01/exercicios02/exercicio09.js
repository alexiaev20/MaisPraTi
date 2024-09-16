// 9: Contabilizando Elementos com uma Condição
const clientes = [
    { nome: 'Luiz', idade: 28, cidade: 'Curitiba' },
    { nome: 'Marina', idade: 35, cidade: 'Florianópolis' },
    { nome: 'Bruno', idade: 40, cidade: 'Porto Alegre' }
];

let count = 0;
clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        count++;
    }
});

console.log(`Número de clientes com mais de 30 anos: ${count}`);
