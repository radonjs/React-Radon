import { combineReducers } from 'redux';
import marketsReducer from './marketsReducer';

const reducers = combineReducers({
  markets: marketsReducer
});

export default reducers;