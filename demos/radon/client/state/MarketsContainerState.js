import ConstructorNode from '../../../../constructorNode.js';

const MarketsContainerState = new ConstructorNode('MarketsContainerState');
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
      current.push({
        marketId: payload.lastMarketId,
        location: payload.location,
        cards: 0,
      });
      return current;
    },
    incrementCard: (current, index, payload) => {
      let {cards, location, marketId} = current;
      return {location: location, marketId: marketId, cards: cards + 1};
    },
    decrementCard: (current, index, payload) => {
      let {cards, location, marketId} = current;
      return {location: location, marketId: marketId, cards: cards - 1};
    }
  }
})

export default MarketsContainerState;