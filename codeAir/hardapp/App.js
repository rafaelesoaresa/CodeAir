import React, { useState } from 'react';
import './App.css'; // Certifique-se de ter um arquivo CSS correspondente

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [force, setForce] = useState('');
  const [area, setArea] = useState('');
  const [result, setResult] = useState('');

  const checkAndUnlock = () => {
    const codeInput = document.getElementById('unlockCode').value;
    // Substitua 'seucodigo' pelo código que deseja usar para desbloquear
    if (codeInput === '512783') {
      setUnlocked(true);
      enableCalculator();
    } else {
      alert('Código incorreto. Tente novamente.');
    }
  };

  const enableCalculator = () => {
    setUnlocked(true);
  };

  const calculatePressure = () => {
    if (force && area) {
      const pressure = force / area;
      setResult(`Pressão calculada: ${pressure.toFixed(2)} N/m²`);
    } else {
      alert('Insira valores válidos para Força e Área.');
    }
  };

  return (
    <div>
      <header>
        <div className="left-section">
          <img
            src="_img/302310103-30a4a080-3bb1-4dba-a3b0-708c0f9da18d.png"
            alt="Logo 1"
            width="300px"
          />
          <h1>Pneumática</h1>
        </div>
      </header>

      <main>
        <div className={`unlock-section ${unlocked ? 'no-blur' : ''}`}>
          <label htmlFor="unlockCode">Insira o código:</label>
          <input
            type="text"
            id="unlockCode"
            className="unlock-input"
            placeholder="Código"
          />
          <button onClick={checkAndUnlock} className="unlock-button">
            unlock
          </button>
        </div>
        <div
          id="calculator"
          className={`calculator-content ${unlocked ? 'unlocked' : 'no-blur'}`}
        >
          <div className="calculator-inputs">
            <input
              type="number"
              id="force"
              className="calculator-input"
              placeholder="Força (N)"
              value={force}
              onChange={(e) => setForce(e.target.value)}
              disabled={!unlocked}
            />
            <input
              type="number"
              id="area"
              className="calculator-input"
              placeholder="Área (m²)"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              disabled={!unlocked}
            />
          </div>
          <button
            onClick={calculatePressure}
            className="calculator-button"
            disabled={!unlocked}
          >
            Calcular Pressão
          </button>
          <p id="result" className="calculator-result">
            {result}
          </p>
        </div>
        <br />
        <br />
        <br />

        <div className="text">
          <div id="text1">
            <h1>Pressão na Pneumática</h1>
            <p>
              Na pneumática, a pressão desempenha um papel fundamental no
              funcionamento e na eficiência dos sistemas que utilizam ar
              comprimido para realizar trabalho mecânico. Compreender como a
              pressão é aplicada e controlada é essencial para projetar e operar
              sistemas pneumáticos de forma segura e eficaz.
            </p>
            {/* Restante do conteúdo... */}
          </div>
        </div>
        {/* Outros blocos de texto... */}
      </main>

      <footer>© 2024 Minha Sala Virtual</footer>
    </div>
  );
}

export default App;
