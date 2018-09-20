import StateNode from '../../../../stateNode.js';

const MarketsContainerState = new StateNode('MarketsContainerState');
MarketsContainerState.parent = 'MainContainerState';

MarketsContainerState.initializeState({
  marketList: [],
  lastMarketId: 10000,
})

MarketsContainerState.initializeModifiers({
  lastMarketId: {
    incrementLastMarketId: (current) => {
      return current += 1;
    }
  },
  marketList: {
    addMarket: (current, payload) => {
      console.log('THIS IS THE CURRENT +++++++++++++++++++', JSON.stringify(current));
      current.push({
        marketId: payload.lastMarketId,
        location: payload.location,
        cards: 10,
      });
      return current;
    },
    incrementCard: (current, index, payload) => {
      let {cards, location, marketId} = current;
      return {location: location, marketId: marketId, cards: cards + 1};
    },
    decrementCard: (current, index, payload) => {
      return current -= 1;
    }
  }
})

export default MarketsContainerState;