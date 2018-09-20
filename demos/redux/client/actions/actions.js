import * as types from '../constants/actionTypes'

export const addCard = (marketId) => ({
  type: types.ADD_CARD,
  payload: marketId,
});

export const deleteCard = (marketId) => ({
  type: types.DELETE_CARD,
  payload: marketId,
});

export const addMarket = (location) => ({
  type: types.ADD_MARKET,
  location: location
});