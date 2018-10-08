import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import {bind} from 'react-radon';

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
    )
  }
}

export default bind(App);