import React, { Component } from 'react';
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import MarketsContainer from './MarketsContainer.jsx'

// i want these vars: totalMarkets, totalCards

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">MegaMarket Loyalty Cards</h1>
          <TotalsDisplay totalCards={this.props.totalCards} totalMarkets={this.props.totalMarkets}/>
          <MarketsContainer />
        </div>
      </div>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default MainContainer();