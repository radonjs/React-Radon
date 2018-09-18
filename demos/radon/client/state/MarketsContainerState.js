import StateNode from '../../radon/stateNode.js';

const MarketsContainerState = new StateNode('MarketsContainerState');
MarketsContainerState.parent = 'MainContainerState';

AppState.initializeState({
  marketList: [],
  lastMarketId: 10000,
})

AppState.initializeModifiers({
  lastMarketId: {
    incrementlastMarketId: (current) => {
      return current += 1;
    }
  },
  marketList: {
    addMarket: (current, payload) => {
      return current.push({
        marketId: payload.lastMarketId,
        location: payload.location,
        cards: 0,
      })
    },
    incrementCard: (current, index, payload) => {
      return current += 1;
    },
    decrementCard: (current, index, payload) => {
      return current -= 1;
    }
  }
})

export default AppState;