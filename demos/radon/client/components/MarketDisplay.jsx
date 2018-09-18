import React from 'react';

const MarketDisplay = (props) => (
  <div>
    <h3>Markets</h3>
    {props.marketList}
  </div>
);

export default MarketDisplay;