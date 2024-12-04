import React, { useState } from 'react';
import './css/GaleriaDeImagens.css';  


function GaleriaDeImagens() {
  // Lista de imagens 
  const imagens = [
    './images/01.jpg',
    './images/02.jpg',
    './images/03.jpg',
  ];

  // Estado para armazenar a imagem selecionada
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  return (
    <div className="galeria-container">
      {/* Título da Galeria */}
      <h1>Galeria de Imagens</h1>
      
      <div className="galeria">
        {/* lista de imagens e exibe cada uma delas */}
        {imagens.map((imagem, index) => (
          <img
            key={index} 
            src={imagem} 
            alt={`Imagem ${index + 1}`} 
            // Ao clicar na imagem, tem a visualização ampliada
            onClick={() => setImagemSelecionada(imagem)} 
          />
        ))}
      </div>
      
      {/* Se uma imagem for selecionada, exibe a visualização ampliada */}
      {imagemSelecionada && (
        <div className="visualizacao-ampliada">
          {/* Exibe a imagem ampliada */}
          <img src={imagemSelecionada} alt="Imagem ampliada" />
          
          {/* Botão para fechar a visualização ampliada */}
          <button
            onClick={() => setImagemSelecionada(null)}
            className="botao-fechar"
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
}

export default GaleriaDeImagens;
