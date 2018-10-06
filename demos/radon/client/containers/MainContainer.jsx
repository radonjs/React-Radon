import React, { Component } from 'react';
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import MarketsContainer from './MarketsContainer.jsx'
import bind from '../../../../reactBindings/bind.js';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">MegaMarket Loyalty Cards</h1>
          <TotalsDisplay totalCards={this.props.val.totalCards.val} totalMarkets={this.props.val.totalMarkets.val}/>
          <MarketsContainer increment={this.props.val.totalCards.incrementCards}/>
        </div>
      </div>
    )
  }
}

export default bind(MainContainer);