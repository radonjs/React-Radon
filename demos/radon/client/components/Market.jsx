import React from 'react';

class Market extends React.Component {
  render() { 
    return (<div className="marketBox">
    <div>Market ID: {this.props.marketList[this.props.i].marketId}</div>
    <div>Location: {this.props.marketList[this.props.i].location}</div>
    <div>Cards: {this.props.marketList[this.props.i].cards}</div>
    <div>% of total: {this.props.marketList[this.props.i].cards / this.props.totalCards * 100}</div>
    <div>
      <button className={this.props.marketList[this.props.i].marketId} onClick={(e) => {this.props.addCard(e, this.props.i)}}>Add Card</button>
      <button className={this.props.marketList[this.props.i].marketId} onClick={(e) => {this.props.deleteCard(e, this.props.i)}}>Delete Card</button>
    </div>
  </div>);
  }
}

export default Market;