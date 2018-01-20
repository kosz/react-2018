import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  render() {

    const { increment, decrement, counter } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello
          <br/>
          {counter}
          <br/>
          <button onMouseDown={increment}>+</button>
          <button onMouseDown={decrement}>-</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch({ type: 'INCREMENT' })
    },
    decrement: () => {
      dispatch({ type: 'DECREMENT' })
    }
  }
}

const ReduxApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ReduxApp;
