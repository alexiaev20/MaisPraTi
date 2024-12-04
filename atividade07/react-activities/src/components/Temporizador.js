import React, { useState, useEffect } from 'react';
import './css/Temporizador.css';

function Temporizador() {
  const [tempo, setTempo] = useState(0); // Estado do tempo
  const [ativo, setAtivo] = useState(false); // Controle de ativação do temporizador

  useEffect(() => {
    let intervalo;

    if (ativo) {
      intervalo = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1); // Incrementa o tempo
      }, 1000);
    } else {
      clearInterval(intervalo); // Limpa o intervalo se inativo
    }

    return () => clearInterval(intervalo); // Limpeza do intervalo
  }, [ativo]); // Dependência do estado 'ativo'

  const reiniciarTemporizador = () => {
    setTempo(0); // Reseta o tempo
    setAtivo(true); // Ativa o temporizador
  };

  return (
    <div className="temporizador-container">
      <h1>Tempo: {tempo}s</h1>
      
      <button onClick={() => setAtivo(true)} className="botao-iniciar">
        Iniciar
      </button>
      <button onClick={() => setAtivo(false)} className="botao-pausar">
        Pausar
      </button>
      <button onClick={reiniciarTemporizador} className="botao-reiniciar">
        Reiniciar
      </button>
    </div>
  );
}

export default Temporizador;
