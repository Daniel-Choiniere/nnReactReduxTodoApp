// this will be our root component
import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'


class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario kart' }
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
  addTodo = (todo) => {
    todo.id = Math.random();
    // using the spread operator it creates a new array and gets each individual item of the state.todos and dumps it into the new array. 
    // we then take the newly submitted todo and add it to the end of the list (array)
    let todos = [...this.state.todos, todo];
    this.setState({
      // set the state to the new todos array
      todos: todos
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
