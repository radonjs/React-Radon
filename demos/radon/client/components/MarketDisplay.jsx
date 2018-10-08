import React from 'react';
import {bind} from 'react-radon';

const MarketDisplay = (props) => (
  <div>
    <h3>Markets</h3>
    {props.marketList}
  </div>
);

export default bind(MarketDisplay);