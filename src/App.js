import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import {TodoForm} from './components/TodoForm'
import {TodoList} from './components/TodoList'

export default class App extends Component {
  state = {
    todos: [
      {id:1, name: "Get through some slides", isCompleted: true},
      {id:2, name: "Learn JSX", isCompleted: false},
      {id:3, name: "Learn React API", isCompleted: false},
      {id:4, name: "Profit", isCompleted: false}
    ],
    currentTodo: '',
    isValid: false
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newTodo = {id: 5, name: this.state.currentTodo, isCompleted: false}
    this.setState((state) => ({currentTodo: '',
      todos: [...state.todos, newTodo]}))
  }

  handleInvalidSubmit = (evt) => {
    evt.preventDefault()
    console.error('Nope!')
  }

  handleInputChange = (evt) => {
    const name = evt.target.value
    const isValid = !!name.length
    this.setState({currentTodo: name, isValid})
  }

  render() {
    const submitHandler = this.state.isValid ? this.handleSubmit : this.handleInvalidSubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm
            inputValue={this.state.currentTodo}
            submitHandler={submitHandler}
            changeHandler={this.handleInputChange} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    )
  }
}
