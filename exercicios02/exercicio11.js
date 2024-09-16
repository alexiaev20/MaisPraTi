//11: Agrupando Elementos com forEach
const pedidos = [
    { cliente: 'Alice', produto: 'Caneta', quantidade: 10 },
    { cliente: 'Bob', produto: 'Lápis', quantidade: 5 },
    { cliente: 'Alice', produto: 'Caderno', quantidade: 2 }
];

const agrupamento = {};
pedidos.forEach(pedido => {
    if (!agrupamento[pedido.cliente]) {
        agrupamento[pedido.cliente] = 0;
    }
    agrupamento[pedido.cliente] += pedido.quantidade;
});

console.log(agrupamento);
