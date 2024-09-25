//15: Filtrando e Somando Valores
const transacoes = [
    { tipo: 'entrada', valor: 1000 },
    { tipo: 'saída', valor: 300 },
    { tipo: 'entrada', valor: 500 },
    { tipo: 'saída', valor: 200 }
];

let saldoFinal = 0;
transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
        saldoFinal += transacao.valor;
    } else {
        saldoFinal -= transacao.valor;
    }
});

console.log(`Saldo final: R$ ${saldoFinal}`);
