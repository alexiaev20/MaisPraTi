//  4: Iterando Sobre Arrays de Objetos
const pessoas = [
    { nome: 'João', idade: 30, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 25, cidade: 'Rio de Janeiro' },
    { nome: 'Carlos', idade: 40, cidade: 'Belo Horizonte' }
];

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}
