import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {TodoForm, TodoList, Footer} from './components/todo'
import {addTodo, findById, toggleTodo, updateTodo, removeTodo} from './lib/todoHelpers'
import {loadTodos, createTodo, saveTodo, destroyTodo} from './lib/todoService'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      currentTodo: '',
      isLoading: true
    }

    this.handleRemove = this.handleRemove.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showTempMessage = this.showTempMessage.bind(this)
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({todos, isLoading:false}))
  }

  handleRemove(id, evt) {
    evt.preventDefault()
    const updatedTodos = removeTodo(id, this.state.todos)
    destroyTodo(id)
      // .then(() => this.setState((prev) => ({...prev, todos: removeTodo(prev.todos, id)})))
      .then(() => this.setState({todos: updatedTodos}))
      .then(() => this.showTempMessage('Todo Removed'))
  }

  handleToggle(id) {
    const targetTodo = findById(id, this.state.todos)
    const updated = toggleTodo(targetTodo)
    saveTodo(updated)
      .then(todo => updateTodo(todo, this.state.todos))
      .then(todos => this.setState({todos}))
      .then(() => this.showTempMessage('Todo Updated'))
  }

  handleSubmit(evt) {
    evt.preventDefault()
    createTodo({name: this.state.currentTodo, isComplete: false})
      .then(todo => addTodo(todo, this.state.todos))
      .then(updatedTodos => this.setState({
        todos: updatedTodos,
        currentTodo: '',
        errorMessage: ''})
      )
      .then(() => this.showTempMessage('Todo added'))
  }

  showTempMessage(msg) {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
  }

  handleEmptySubmit(evt) {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  handleInputChange(evt) {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <Router>
          <div className="Todo-App">
            {this.state.isLoading ? <h1>Loading...</h1> : null}
            <Switch>
              <Route path='/' exact render={() => <h2>Showing All</h2>}/>
              <Route path='/active' render={() => <h2>Showing Active</h2>}/>
              <Route path='/complete' render={() => <h2>Showing Complete</h2>}/>
            </Switch>

            {this.state.errorMessage && <div className='error'>{this.state.errorMessage}</div>}
            {this.state.message && <div className='success'>{this.state.message}</div>}

            <TodoForm handleInputChange={this.handleInputChange}
              currentTodo={this.state.currentTodo}
              handleSubmit={submitHandler}/>

            <Route path='/:filter?' render={({match}) =>
                <TodoList handleToggle={this.handleToggle}
                  filter={match.params.filter}
                  todos={this.state.todos}
                  handleRemove={this.handleRemove} />
                } />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
