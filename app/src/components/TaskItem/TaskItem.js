import React from 'react';
import './TaskItem.css';

const TaskItem = ({ tarea, index, estadoTarea, borrar }) => {
  return (
    <li className={tarea.completa ? 'checked' : ''} onClick={() => estadoTarea(index)}>
      {tarea.title}
      <span className="close" onClick={(e) => { e.stopPropagation(); borrar(index); }}>x</span>
    </li>
  );
};

export default TaskItem;
