import React, { useState, useEffect } from 'react';
import './css/AlterarCorFundo.css'; 


function AlterarCorFundo() {
  // armazenar a cor atual
  const [cor, setCor] = useState('#ffffff');

  // Atualiza o fundo da página quando a cor mudar
  useEffect(() => {
    document.body.style.backgroundColor = cor;
  }, [cor]);

  // Gera uma cor aleatória
  const gerarCorAleatoria = () => {
    const novaCor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setCor(novaCor);
  };

  return (
    <div className="container">
      <h1>Cor Atual: {cor}</h1>
      <button onClick={gerarCorAleatoria}>
        Alterar Cor
      </button>
    </div>
  );
}

export default AlterarCorFundo;
