import React, { useState } from 'react';
import './Header.css';

const Header = ({ anadirtarea, buscarMasrapida }) => {
  const [inputValue, setInputValue] = useState('');

  const publicarTarea = () => {
    if (inputValue.trim() === '') {
      alert('Debes escribir algo!');
      return;
    }
    anadirtarea(inputValue);
    setInputValue('');
  };

  return (
    <div className="header">
      <h2>TODO List</h2>
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Tarea para hacer. Ej: Lavar los platos" 
      />
      <span onClick={publicarTarea} className="addBtn">Añadir</span>
      <button onClick={buscarMasrapida} className="calculateBtn">Tarea más rápida en hacer</button>
    </div>
  );
};

export default Header;
