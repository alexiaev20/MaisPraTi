// 6: Filtrando Arrays de Objetos
const funcionarios = [
    { nome: 'Pedro', cargo: 'Gerente', salario: 5000 },
    { nome: 'Paula', cargo: 'Analista', salario: 3000 },
    { nome: 'Ricardo', cargo: 'Diretor', salario: 7000 }
];

const salarioMinimo = 4000;
for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`);
    }
}
