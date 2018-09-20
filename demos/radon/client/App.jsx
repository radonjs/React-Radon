import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import bind from '../../../reactBindings/bind.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.increment();
  }

  decrement() {
    this.props.decrement();
  }

  render() {
    return(
      <MainContainer />
      // <div><p>{this.props.testing}</p>
      // <button onClick={this.increment}>Increment</button>
      // <button onClick={this.decrement}>Decrement</button>
      // </div>
    )
  }
}

export default bind(App);