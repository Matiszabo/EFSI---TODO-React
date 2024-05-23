import React from 'react';
import './Header.css';

class Header {
  render() {
    return (
      <div className="header">
        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Tarea para hacer. Ej: Lavar los platos" />
        <span onClick={this.props.newElement} className="addBtn">Añadir</span>
        <button onClick={this.props.masrapida} className="calculateBtn">Tarea más rápida en hacer</button>
      </div>
    );
  }
}

export default Header;
