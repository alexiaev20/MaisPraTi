import React, { useState } from 'react';
import './css/FormularioDeRegistro.css';
// Componente de Formulário de Registro
function FormularioDeRegistro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    setMensagem(`Bem-vindo, ${nome}!`);
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Formulário de Registro</h1>
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ display: 'block', margin: '10px auto', padding: '5px' }}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', margin: '10px auto', padding: '5px' }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{ display: 'block', margin: '10px auto', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Enviar
        </button>
      </form>
      {mensagem && <p style={{ marginTop: '20px' }}>{mensagem}</p>}
    </div>
  );
}

export default FormularioDeRegistro;
