import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

class TaskList {
  render() {
    const tasks = this.props.tasks.map((task, index) => (
      <TaskItem
        key={index}
        task={task}
        index={index}
        toggleTask={this.props.toggleTask}
        deleteTask={this.props.deleteTask}
      />
    ));

    return <ul id="myUL">{tasks}</ul>;
  }
}

export default TaskList;
