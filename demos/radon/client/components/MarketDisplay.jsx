import React from 'react';
import bind from '../../../../reactBindings/bind.js';

const MarketDisplay = (props) => (
  <div>
    <h3>Markets</h3>
    {props.marketList}
  </div>
);

export default bind(MarketDisplay);