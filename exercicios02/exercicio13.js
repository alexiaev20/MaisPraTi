//13: Implementando um Carrinho de Compras
const carrinho = {
    itens: [
        { nome: 'Livro', quantidade: 2, precoUnitario: 30 },
        { nome: 'Lápis', quantidade: 10, precoUnitario: 2 },
        { nome: 'Caderno', quantidade: 3, precoUnitario: 15 }
    ]
};

let valorTotalCarrinho = 0;
carrinho.itens.forEach(item => {
    valorTotalCarrinho += item.quantidade * item.precoUnitario;
});

console.log(`Valor total do carrinho: R$ ${valorTotalCarrinho}`);
