import React from 'react';
import MarketDisplay from './MarketDisplay.jsx';

const MarketsDisplay = (props) => {

  return(
    <div className="displayBox">
      <h4>Markets</h4>
      <MarketDisplay />
    </div>
  );
};

export default MarketsDisplay;