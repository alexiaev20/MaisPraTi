//10: Criando Relatórios com Objetos e Arrays
const vendas = [
    { produto: 'TV', quantidade: 2, valor: 1500 },
    { produto: 'Notebook', quantidade: 1, valor: 3000 },
    { produto: 'Celular', quantidade: 3, valor: 1000 }
];

let valorTotal = 0;
vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor;
});

console.log(`Valor total das vendas: R$ ${valorTotal}`);
