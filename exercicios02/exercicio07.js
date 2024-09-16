//  7: Modificando Objetos em um Array
const produtos = [
    { nome: 'Notebook', preco: 3000, desconto: 0 },
    { nome: 'Smartphone', preco: 1500, desconto: 0 },
    { nome: 'Tablet', preco: 1000, desconto: 0 }
];

produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.10;
    produto.preco -= produto.desconto; 
});

console.log(produtos);
