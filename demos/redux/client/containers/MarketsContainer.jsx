import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import MarketCreator from '../components/MarketCreator.jsx';
import MarketsDisplay from '../components/MarketDisplay.jsx';

const mapStateToProps = store => ({
  marketList: store.markets.marketList,
  totalCards: store.markets.totalCards,
  lastMarketId: store.markets.lastMarketId,
  newLocation: store.markets.newLocation
});

const mapDispatchToProps = dispatch => ({
  onNewLocationClick: text => dispatch(actions.addMarket(text)),
  onAddCardClick: id => dispatch(actions.addCard(id)),
  onDeleteCardClick: id => dispatch(actions.deleteCard(id))
});

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
    this.props.onNewLocationClick(textField.value);
    textField.value = '';
  }

  addCard(e){
    e.preventDefault();
    this.props.onAddCardClick(e.target.className);
  }

  deleteCard(e) {
    e.preventDefault();
    this.props.onDeleteCardClick(e.target.className);
  }

  render() {
    const markets = this.props.marketList.map((market, i) => (
        <div key={i} className="marketBox">
          <div>Market ID: {market.marketId}</div>
          <div>Location: {market.location}</div>
          <div>Cards: {market.cards}</div>
          <div>% of total: {Math.floor(market.cards / this.props.totalCards * 100) || 0}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);