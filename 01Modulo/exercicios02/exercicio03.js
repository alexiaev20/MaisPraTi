// 3: Filtrando Propriedades de Objetos
function filtrarPropriedades(objeto, valorMinimo) {
    let novoObjeto = {};
    
   
    for (let propriedade in objeto) {
        if (objeto[propriedade] > valorMinimo) {
            novoObjeto[propriedade] = objeto[propriedade];
        }
    }
    return novoObjeto;
}

const produto = {
    preco: 50,
    desconto: 5,
    estoque: 100,
    vendas: 75
};

console.log(filtrarPropriedades(produto, 50)); 
