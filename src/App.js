import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  }

  handleAddTask = () => {
    const { tasks, newTask } = this.state;
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, newTask];
      this.setState({ tasks: updatedTasks, newTask: '' });
    }
  }

  render() {
    const { tasks, newTask } = this.state;

    return (
        <div>
          <h1>Список задач</h1>
          <ul>
            {tasks.map((task, index) => <li key={index}>{task}</li>)}
          </ul>
          <input
              type="text"
              value={newTask}
              onChange={this.handleInputChange}
              placeholder="Введите список задач"
          />
          <button onClick={this.handleAddTask}>Добавить</button>
        </div>
    );
  }
}

export default TodoList;
