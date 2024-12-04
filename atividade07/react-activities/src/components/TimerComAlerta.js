import React, { useState, useEffect } from 'react';
import './css/TimerComAlerta.css';



function TimerComAlerta() {
  const [tempo, setTempo] = useState(0); // Estado do tempo
  const [ativo, setAtivo] = useState(false); // Controle de ativação do timer

  useEffect(() => {
    let intervalo;

    // Contagem regressiva se o timer estiver ativo e tempo for maior que 0
    if (ativo && tempo > 0) {
      intervalo = setInterval(() => setTempo((prev) => prev - 1), 1000);
    } else if (tempo === 0) {
      setAtivo(false); // Desativa o timer
      alert('Tempo acabou!'); 
    }

    return () => clearInterval(intervalo); // Limpeza do intervalo
  }, [ativo, tempo]); // Atualiza o efeito quando 'ativo' ou 'tempo' muda

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Tempo Restante: {tempo}s</h1>
      
      <input
        type="number"
        value={tempo}
        onChange={(e) => setTempo(Number(e.target.value))}
        style={{ marginBottom: '10px', padding: '5px' }}
        disabled={ativo} // Impede edição durante a contagem
      />
      
      <div>
        <button onClick={() => setAtivo(true)} style={{ marginRight: '10px' }}>
          Iniciar
        </button>
        <button onClick={() => setAtivo(false)} style={{ marginRight: '10px' }}>
          Pausar
        </button>
        <button onClick={() => { setTempo(0); setAtivo(false); }}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default TimerComAlerta;
