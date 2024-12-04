import React, { useState, useEffect } from 'react';  // Importa React e hooks
import axios from 'axios';  // Importa axios para requisições HTTP
import './css/RequisicaoDeDados.css';  // Importa o CSS

// Componente de Requisição de Dados
function RequisicaoDeDados() {
  const [posts, setPosts] = useState([]);  //  armazenar os posts
  const [carregando, setCarregando] = useState(true);  //controlar o carregamento

  // Função para buscar os posts da API
  const fetchPosts = async () => {
    setCarregando(true);  
    try {
      const resposta = await axios.get('https://jsonplaceholder.typicode.com/posts');  
      setPosts(resposta.data);  
    } catch (error) {
      alert('Erro ao carregar dados.');  
    } finally {
      setCarregando(false); 
    }
  };

  useEffect(() => {
    fetchPosts();  // Carrega os posts quando o componente for montado
  }, []);  // Efeito executado apenas uma vez

  return (
    <div className="requisicao-container">
      <h1>Lista de Posts</h1>
      {carregando ? (
        <p>Carregando...</p>  // Exibe "Carregando..." enquanto os dados são carregados
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>  // Exibe os títulos dos posts
          ))}
        </ul>
      )}
      <button onClick={fetchPosts}>Recarregar</button> 
    </div>
  );
}

export default RequisicaoDeDados; 
