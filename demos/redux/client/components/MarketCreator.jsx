import React from 'react';

const MarketCreator = props => (
  <div>
    <div>
      <h3>Create New Market</h3>
      <form>
        <span>Location: </span>
        <input type='text' id='inputTag'/>
        <button id='addMarket' onClick={props.addLocation}>Add Market</button>
      </form>
    </div>
  </div>
  
);

export default MarketCreator;