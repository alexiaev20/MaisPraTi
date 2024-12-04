import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './css/FiltroDeLista.css'; 

// Componente de Filtro de Lista
function FiltroDeLista() {
  const [filtro, setFiltro] = useState('');
  const [nomes, setNomes] = useState([
    { nome: 'Alice', data: '2024-12-03' },
    { nome: 'Bob', data: '2024-12-02' },
    { nome: 'Carlos', data: '2024-12-01' },
  ]);
  const [novoNome, setNovoNome] = useState('');
  const [editarIndex, setEditarIndex] = useState(null);

  // Função para adicionar ou editar nome
  const adicionarOuEditar = () => {
    const dataAtual = new Date().toISOString().split('T')[0];
    if (editarIndex !== null) {
      const updatedNomes = [...nomes];
      updatedNomes[editarIndex].nome = novoNome;
      updatedNomes[editarIndex].data = dataAtual;
      setNomes(updatedNomes);
      setEditarIndex(null);
    } else {
      setNomes([...nomes, { nome: novoNome, data: dataAtual }]);
    }
    setNovoNome('');
  };

  // Função para editar nome
  const editarNome = (index) => {
    setNovoNome(nomes[index].nome);
    setEditarIndex(index);
  };

  // Função para remover nome
  const removerNome = (index) => {
    const updatedNomes = nomes.filter((_, i) => i !== index);
    setNomes(updatedNomes);
  };

  // Filtrar os nomes com base no filtro
  const nomesFiltrados = nomes.filter((nome) =>
    nome.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Filtro de Lista</h1>

      {/* Campo de Filtro */}
      <input
        type="text"
        placeholder="Filtrar nomes..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      
      {/* Campo para adicionar/editar nome */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Adicionar/Editar nome"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
        />
        <button className="add-btn" onClick={adicionarOuEditar}>
          {editarIndex !== null ? 'Editar' : 'Adicionar'}
        </button>
      </div>

      {/* Tabela com os nomes e ações */}
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {nomesFiltrados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.data}</td>
              <td className="actions">
                <button onClick={() => editarNome(index)} title="Editar">
                  <i className="fas fa-edit"></i>
                </button>
                <button onClick={() => removerNome(index)} title="Remover">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FiltroDeLista;
