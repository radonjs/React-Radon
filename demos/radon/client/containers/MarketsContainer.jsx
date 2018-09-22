import React, { Component } from 'react';
import MarketCreator from '../components/MarketCreator.jsx'
import MarketsDisplay from '../components/MarketDisplay.jsx'
import Market from '../components/Market.jsx';
import bind from '../../../../reactBindings/bind.js';

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
    this.props.incrementMarkets();
    this.props.incrementLastMarketId();
    this.props.addMarket({lastMarketId: this.props.lastMarketId + 1, location: textField.value});
    textField.value = '';
  }

  addCard(e, index){
    e.preventDefault();
    this.props.incrementCards();
    this.props.incrementCard(index); //(need index... but also the key name);
  }

  deleteCard(e, index) {
    e.preventDefault();
    this.props.decrementCards();
    this.props.decrementCard(index);
  }

  render() {
    let markets = [];
    if(this.props.marketList){
      markets = this.props.marketList.map((market, i) => {
          let ArrMarket = this.props.keySubscribe(i, Market);
          return (<ArrMarket key={i} i={i} addCard={this.addCard} deleteCard={this.deleteCard}/>)
        }
      );
    }

    return (
      <div className="innerbox" id="height-probs">
        <MarketCreator onClick={this.addLocation} />
        <MarketsDisplay marketList={markets}/>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
export default bind(MarketsContainer);