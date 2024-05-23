import React from 'react';

class TaskItem {
  render() {
    const { task, index } = this.props;

    return (
      <li
        className={task.completed ? 'checked' : ''}
        onClick={() => this.props.toggleTask(index)}
      >
        {task.title} - Creada: {task.creationTime}
        <span className="close" onClick={() => this.props.deleteTask(index)}>&times;</span>
      </li>
    );
  }
}

export default TaskItem;
