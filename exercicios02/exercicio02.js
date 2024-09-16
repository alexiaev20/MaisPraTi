//2: Verificando Propriedades
    const livro = {
        titulo: 'Dom Casmurro',
        autor: 'Machado de Assis',
        anoPublicacao: 1899,
        genero: 'Romance'
    };


    let temEditora = false;
        for (let propriedade in livro) {
            if (propriedade === 'editora') {
                temEditora = true;
            }
    }

        if (!temEditora) {
            livro.editora = 'Desconhecida';
    }

console.log(livro);
