import React from 'react';

class Market extends React.Component {
  render() { 
    let thisMarket = this.props.val.marketList.val[this.props.i];
    let totalCards = this.props.parent.val.totalCards.val //TOTALCARDS IS IN MAINCONTAINER YOU GOTTA GO GET IT BOY
    return (<div className="marketBox">
    <div>Market ID: {this.props.val.marketList.val[this.props.i].val.marketId.val}</div>
    <div>Location: {this.props.val.marketList.val[this.props.i].val.location.val}</div>
    <div>Cards: {this.props.val.marketList.val[this.props.i].val.cards.val}</div>
    <div>% of total: {Math.floor(this.props.val.marketList.val[this.props.i].val.cards.val / totalCards * 100) || 0}</div>
    <div>
      <button className={this.props.val.marketList.val[this.props.i].val.marketId.val}
             onClick={(e) => {this.props.addCard(e, this.props.i)}}>Add Card</button>

      <button className={this.props.val.marketList.val[this.props.i].val.marketId.val}
             onClick={(e) => {if (this.props.val.marketList.val[this.props.i].val.cards.val > 0)
             this.props.deleteCard(e, this.props.i)}}>Delete Card</button>
    </div>
  </div>);
  }
}

export default Market;