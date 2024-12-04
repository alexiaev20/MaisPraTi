import React, { useState } from 'react';
import './css/TabsNavegaveis.css';  // Importando o CSS para os estilos

function TabsNavegaveis() {
  const [abaAtiva, setAbaAtiva] = useState('sobre');  // Estado para gerenciar a aba ativa

  return (
    <div className="tabs-container">
      <h1 className="tabs-title">Tabs Navegáveis</h1>
      
      {/* Botões das abas */}
      <div className="tabs-buttons">
        <button
          className={`tab-button ${abaAtiva === 'sobre' ? 'active' : ''}`}  // Aplica a classe 'active' à aba ativa
          onClick={() => setAbaAtiva('sobre')}  // Muda a aba para 'sobre'
        >
          Sobre
        </button>
        <button
          className={`tab-button ${abaAtiva === 'contato' ? 'active' : ''}`}  // Aplica a classe 'active' à aba ativa
          onClick={() => setAbaAtiva('contato')}  // Muda a aba para 'contato'
        >
          Contato
        </button>
      </div>
      
      {/* Conteúdo das abas */}
      <div className="tabs-content">
        {abaAtiva === 'sobre' && (
          <div>
            <h2>Sobre o Projeto</h2>
            <p>
              Este é um exemplo de aplicação React com navegação por tabs. O objetivo deste projeto é demonstrar o uso do estado no React para alternar entre abas e exibir conteúdos diferentes de acordo com a aba selecionada. Além disso, a aplicação utiliza o conceito de "tabs navegáveis", onde o usuário pode clicar em botões de abas para exibir diferentes seções de conteúdo, proporcionando uma navegação mais interativa e organizada.
            </p>
            
          </div>
        )}
        
        {abaAtiva === 'contato' && (
          <div>
            <h2>Entre em Contato</h2>
            <p>
              Se você tem alguma dúvida, sugestão ou gostaria de entrar em contato, fique à vontade para me enviar uma mensagem. Você pode me encontrar no LinkedIn ou através de e-mail.
            </p>
            <p>
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/alexia-evelyn" target="_blank" rel="noopener noreferrer">Visite meu LinkedIn</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TabsNavegaveis;

