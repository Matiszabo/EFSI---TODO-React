import React, { useState } from 'react';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const crearTarea = (title) => {
    const nuevaTarea = {
      title,
      creada: new Date().toISOString(),
      completa: false,
      tiempoCompletar: null,
    };
    setTasks([...tasks, nuevaTarea]);
  };

  const estadoTarea = (index) => {
    const actualizadas = tasks.map((tarea, i) => {
      if (i === index) {
        return {
          ...tarea,
          completa: !tarea.completa,
          tiempoCompletar: !tarea.completa ? new Date().toISOString() : null,
        };
      }
      return tarea;
    });
    setTasks(actualizadas);
  };

  const borrar = (index) => {
    const actualizadas = tasks.filter((_, i) => i !== index);
    setTasks(actualizadas);
  };

  const buscarMasrapida = () => {
    const tareasCompletas = tasks.filter(tarea => tarea.completa);
    if (tareasCompletas.length === 0) {
      alert("No hay tareas completadas.");
      return;
    }

    let minTime = Infinity;
    let masrapida = "";

    tareasCompletas.forEach(tarea => {
      const comienzo = new Date(tarea.creada).getTime();
      const finalizada = new Date(tarea.tiempoCompletar).getTime();
      const tiempo = finalizada - comienzo;

      if (tiempo < minTime) {
        minTime = tiempo;
        masrapida = tarea.title;
      }
    });

    alert(`La tarea más rápida completada fue: ${masrapida}`);
  };

  return (
    <div className="App">
      <Header crearTarea={crearTarea} buscarMasrapida={buscarMasrapida} />
      <TaskList tasks={tasks} estadoTarea={estadoTarea} borrar={borrar} />
    </div>
  );
};

export default App;
