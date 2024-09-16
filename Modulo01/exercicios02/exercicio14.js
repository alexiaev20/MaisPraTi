//14: Manipulando Objetos Complexos
const empresa = {
    departamentos: [
        { nome: 'Vendas', funcionarios: ['João', 'Maria'] },
        { nome: 'TI', funcionarios: ['Carlos', 'Ana'] }
    ]
};


for (let departamento of empresa.departamentos) {
    for (let funcionario of departamento.funcionarios) {
        console.log(`Funcionário: ${funcionario}, Departamento: ${departamento.nome}`);
    }
}
