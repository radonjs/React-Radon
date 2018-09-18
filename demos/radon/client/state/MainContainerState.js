import StateNode from '../../radon/stateNode.js';

const MainContainerState = new StateNode('MainContainerState');

AppState.initializeState({
  totalMarkets: 0,
  totalCards: 0
})

AppState.initializeModifiers({
  totalMarkets: {
    incrementMarkets: (current) => {
      return current += 1;
    }
  },
  totalCards: {
    incrementCards: (current) => {
      return current += 1;
    },
    decrementCards: (current) => {
      return current -= 1;
    }
  }
})

export default AppState;