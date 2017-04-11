import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text"id="todoName"/>
          </form>
          <div className="Todo-List">
            <ul>
              <li>
                <span className='delete-item'><a href="#">X</a></span>
                <input type="checkbox"/>
                Stuff
              </li>
              <li>
                <span className='delete-item'><a href="#">X</a></span>
                <input type="checkbox"/>
                And Things
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
