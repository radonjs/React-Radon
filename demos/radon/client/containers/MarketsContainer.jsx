import React, { Component } from 'react';
import MarketCreator from '../components/MarketCreator.jsx'
import MarketsDisplay from '../components/MarketDisplay.jsx'
import Market from '../components/Market.jsx';
import {bind, objectBind} from 'react-radon';

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
    this.props.parent.val.totalMarkets.incrementMarkets()
    this.props.val.lastMarketId.incrementLastMarketId();
    this.props.val.marketList.addMarket({lastMarketId: this.props.val.lastMarketId.val + 1, location: textField.value});
    textField.value = '';
  }

  addCard(e, index){
    e.preventDefault();
    this.props.parent.val.totalCards.incrementCards();
    this.props.val.marketList.incrementCard(index);
  }

  deleteCard(e, index) {
    e.preventDefault();
    this.props.parent.val.totalCards.decrementCards();
    this.props.val.marketList.decrementCard(index);
  }

  render() {
    let markets = [];
    if(this.props.val.marketList.val){
      let marketData = this.props.val.marketList.val;

      for(let i in marketData){
        let ArrMarket = objectBind(Market, i, this.props.val.marketList);
        markets.push(<ArrMarket key={i} i={i} addCard={this.addCard} deleteCard={this.deleteCard}/>)
      }
      
    }

    return (
      <div className="innerbox" id="height-probs">
        <MarketCreator onClick={this.addLocation} />
        <MarketsDisplay marketList={markets}/>
      </div>
    );
  }
}

export default bind(MarketsContainer);