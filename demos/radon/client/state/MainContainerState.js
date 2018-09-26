import ConstructorNode from '../../../../constructorNode.js';

const MainContainerState = new ConstructorNode('MainContainerState');
MainContainerState.parent = 'AppState'

MainContainerState.initializeState({
  totalMarkets: 0,
  totalCards: 0,
})

MainContainerState.initializeModifiers({
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

export default MainContainerState;