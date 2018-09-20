import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
};

const marketsReducer = (state=initialState, action) => {
  let marketList;
  let totalCards;

  switch(action.type) {
    case types.ADD_MARKET:
      // increment lastMarketId and totalMarkets counters
      const lastMarketId = state.lastMarketId + 1;
      const totalMarkets = state.totalMarkets + 1;

      const newMarket = {
        marketId: lastMarketId,
        location: action.location,
        cards: 0,
      };

      // push the new market onto a copy of the market list
      marketList = state.marketList.slice();
      marketList.push(newMarket);

      // return updated state
      return Object.assign({}, {
        ...state,
        marketList,
        lastMarketId,
        totalMarkets
      })

    case types.ADD_CARD:
      totalCards = state.totalCards + 1;
      marketList = state.marketList.map(market => {
        if (market.marketId == action.payload) {
          market.cards += 1;
        }
        market.percent = Math.floor((market.cards / totalCards) * 100);
        return market;
      })

      return {
        ...state,
        marketList,
        totalCards,
      };

    case types.DELETE_CARD:
      totalCards = state.totalCards;

      marketList = state.marketList.map(market => {
        if (market.marketId == action.payload) {
          if (market.cards > 0) {
            totalCards = state.totalCards - 1;
            market.cards -= 1;
          }
        }
        return market;
      })

      marketList = marketList.map(market => {
        if (totalCards !== 0) market.percent = Math.floor((market.cards / totalCards) * 100);
        else market.percent = 0;
        return market;
      })

      return {
        ...state,
        marketList,
        totalCards,
      };

    default:
      return state;
  }
};

export default marketsReducer;