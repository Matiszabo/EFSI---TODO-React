import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, estadoTarea, borrar }) => {
  return (
    <ul id="myUL">
      {tasks.map((tarea, index) => (
        <TaskItem 
          key={index} 
          tarea={tarea} 
          index={index} 
          estadoTarea={estadoTarea} 
          borrar={borrar}
        />
      ))}
    </ul>
  );
};
export default TaskList;
