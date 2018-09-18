import React, { Component } from 'react';
import MarketCreator from '../components/MarketCreator.jsx'
import MarketsDisplay from '../components/MarketDisplay.jsx'

// i want these vars: totalCards, marketList, lastMarketId

// these modifiers: incrementMarkets, incrementMarketId, addMarket, 
// incrementTotalCards, incrementCard, decrementCards, decrementTotalCards

class MarketsContainer extends Component {
  constructor(props) {
    super(props);
    this.addLocation = this.addLocation.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  addLocation(e){
    e.preventDefault();
    const id = 'inputTag';
    const textField = document.getElementById(id);
    // incrementMarkets();
    // incrementMarketId();
    // addMarket({lastMarketId, location});
    textField.value = '';
  }

  addCard(e, i){
    e.preventDefault();
    // incrementTotalCards();
    // incrementCard(index); (need index... but also the key name);
  }

  deleteCard(e, i) {
    e.preventDefault();
    // decrementTotalCards();
    // decrementCard(i);
  }

  render() {
    const markets = this.props.marketList.map((market, i) => (
        <div key={i} className="marketBox">
          <div>Market ID: {market.marketId}</div>
          <div>Location: {market.location}</div>
          <div>Cards: {market.cards}</div>
          <div>% of total: {market.cards / this.props.totalCards * 100}</div>
          <div>
            <button className={market.marketId} onClick={(e) => {this.addCard(e, i)}}>Add Card</button>
            <button className={market.marketId} onClick={(e) => {this.deleteCard(e, i)}}>Delete Card</button>
          </div>
        </div>
      )
    );

    return (
      <div className="innerbox" id="height-probs">
        <MarketCreator onClick={this.addLocation} />
        <MarketsDisplay marketList={markets}/>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
export default MarketsContainer;