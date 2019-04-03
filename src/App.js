// this will be our root component

import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    // The filter() method creates an array filled with all array elements that pass a test (provided as a function). That new array is saved in the todos variable 
    const todos = this.state.todos.filter(todo => {
      // return true (for all todos with ids that dont match the current id) and add all those elements to the new todos array
      return todo.id !== id;
    });
    this.setState({
      // update the state to the new todos array
      todos: todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
