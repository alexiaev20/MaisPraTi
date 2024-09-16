// 1: Acessando Propriedades de Objetos
const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2021,
    cor: 'Prata'
};

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}
