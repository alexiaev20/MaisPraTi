import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importação dos componentes de cada atividade
import ContadorSimples from './components/ContadorSimples';
import AlterarCorFundo from './components/AlterarCorFundo';
import ListaDeTarefas from './components/ListaDeTarefas';
import Temporizador from './components/Temporizador';
import FiltroDeLista from './components/FiltroDeLista';
import FormularioDeRegistro from './components/FormularioDeRegistro';
import RequisicaoDeDados from './components/RequisicaoDeDados';
import GaleriaDeImagens from './components/GaleriaDeImagens';
import TimerComAlerta from './components/TimerComAlerta';
import TabsNavegaveis from './components/TabsNavegaveis';

import './App.css'; // Importação de estilos personalizados

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>ReactJS Atividades</h1>
          <p>Explore diferentes funcionalidades desenvolvidas com ReactJS</p>
        </header>
        <main className="app-content">
          <nav className="app-menu">
            <ul>
              <li><Link to="/contador">1. Contador Simples</Link></li>
              <li><Link to="/cor-fundo">2. Alteração de Cor de Fundo</Link></li>
              <li><Link to="/tarefas">3. Lista de Tarefas</Link></li>
              <li><Link to="/temporizador">4. Temporizador</Link></li>
              <li><Link to="/filtro-lista">5. Filtro de Lista</Link></li>
              <li><Link to="/registro">6. Formulário de Registro</Link></li>
              <li><Link to="/posts">7. Requisição de Dados</Link></li>
              <li><Link to="/galeria">8. Galeria de Imagens</Link></li>
              <li><Link to="/timer-alerta">9. Timer com Alerta</Link></li>
              <li><Link to="/tabs">10. Tabs Navegáveis</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/contador" element={<ContadorSimples />} />
            <Route path="/cor-fundo" element={<AlterarCorFundo />} />
            <Route path="/tarefas" element={<ListaDeTarefas />} />
            <Route path="/temporizador" element={<Temporizador />} />
            <Route path="/filtro-lista" element={<FiltroDeLista />} />
            <Route path="/registro" element={<FormularioDeRegistro />} />
            <Route path="/posts" element={<RequisicaoDeDados />} />
            <Route path="/galeria" element={<GaleriaDeImagens />} />
            <Route path="/timer-alerta" element={<TimerComAlerta />} />
            <Route path="/tabs" element={<TabsNavegaveis />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>© 2024 ReactJS Atividades | Criado para fins educativos</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
