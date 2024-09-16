// 5: Calculando Valores em Arrays de Objetos
const alunos = [
    { nome: 'Ana', nota1: 8, nota2: 7 },
    { nome: 'Bruno', nota1: 6, nota2: 5 },
    { nome: 'Carla', nota1: 9, nota2: 10 }
];

for (let aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome: ${aluno.nome}, Média: ${media}`);
}
