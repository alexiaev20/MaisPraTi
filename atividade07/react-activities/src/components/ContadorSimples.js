import React, { useState } from 'react';
import './css/ContadorSimples.css';

// Componente de Contador Simples
function ContadorSimples() {
  // Estado do contador
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Contador: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="increment"
      >
        Incrementar
      </button>
      <button
        onClick={() => count > 0 && setCount(count - 1)}
        className="decrement"
        disabled={count === 0}
      >
        Decrementar
      </button>
    </div>
  );
}

export default ContadorSimples;
