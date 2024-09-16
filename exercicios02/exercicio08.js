//8: Criando Novos Arrays a Partir de Objetos
const filmes = [
    { titulo: 'O Poderoso Chefão', diretor: 'Francis Ford Coppola', anoLancamento: 1972 },
    { titulo: 'Interestelar', diretor: 'Christopher Nolan', anoLancamento: 2014 },
    { titulo: 'Matrix', diretor: 'Lana Wachowski, Lilly Wachowski', anoLancamento: 1999 }
];

const titulos = [];
filmes.forEach(filme => titulos.push(filme.titulo));

console.log(titulos);
