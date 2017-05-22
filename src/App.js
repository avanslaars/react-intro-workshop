import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import {TodoForm} from './components/TodoForm'
import {TodoList} from './components/TodoList'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id:1, name: "Get through some slides", isCompleted: true},
        {id:2, name: "Learn JSX", isCompleted: false},
        {id:3, name: "Learn React API", isCompleted: false},
        {id:4, name: "Profit", isCompleted: false}
      ],
      currentTodo: ''
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    )
  }
}
