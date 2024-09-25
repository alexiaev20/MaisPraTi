//12: Atualizando um Array de Objetos
const estoque = [
    { produto: 'Borracha', quantidade: 5, minimo: 10 },
    { produto: 'Caneta', quantidade: 15, minimo: 10 },
    { produto: 'Lápis', quantidade: 2, minimo: 5 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2;
    }
});

console.log(estoque);
