import React, { useState } from 'react';
import './css/ListaDeTarefas.css';

// Componente de Lista de Tarefas
function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  // Adiciona uma nova tarefa
  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
      setNovaTarefa('');
    }
  };

  // Remove uma tarefa
  const removerTarefa = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  // Marca/desmarca uma tarefa como concluída
  const marcarConcluida = (index) => {
    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas[index].concluida = !tarefasAtualizadas[index].concluida;
    setTarefas(tarefasAtualizadas);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Lista de Tarefas</h1>
      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={adicionarTarefa} style={{ padding: '5px 10px' }}>
          Adicionar
        </button>
      </div>
      <ul style={{ marginTop: '20px', listStyle: 'none' }}>
        {tarefas.map((tarefa, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span
              style={{
                textDecoration: tarefa.concluida ? 'line-through' : 'none',
                marginRight: '10px',
              }}
            >
              {tarefa.texto}
            </span>
            <button
              onClick={() => marcarConcluida(index)}
              style={{ marginRight: '5px', padding: '5px' }}
            >
              {tarefa.concluida ? 'Desmarcar' : 'Concluir'}
            </button>
            <button onClick={() => removerTarefa(index)} style={{ padding: '5px' }}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
