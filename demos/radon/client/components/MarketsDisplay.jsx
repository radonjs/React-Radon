import React from 'react';
import MarketDisplay from './MarketDisplay.jsx';
import bind from '../../../../reactBindings/bind.js';

const MarketsDisplay = (props) => {

  return(
    <div className="displayBox">
      <h4>Markets</h4>
      <MarketDisplay />
    </div>
  );
};

export default bind(MarketsDisplay);