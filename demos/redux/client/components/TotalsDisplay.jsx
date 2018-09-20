import React from 'react';

const TotalsDisplay = props => (
  <div className="innerbox" id="totals">
    <span id="totalCards"><label htmlFor="totalCards">Total Cards:</label>{props.totalCards}</span>
    <p>
      <label htmlFor="totalMarkets">Total Markets:</label>
      <span id="totalCards">{props.totalMarkets}</span>
    </p>
  </div>
);
export default TotalsDisplay;