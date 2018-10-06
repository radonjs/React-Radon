import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';

import App from '../client/App';
import MainContainer from '../client/containers/MainContainer'
import MarketsContainer from '../client/containers/MainContainer'
import reducers from '../client/reducers/reducers';
import TotalsDisplay from '../client/components/TotalsDisplay'
import MarketCreator from '../client/components/MarketCreator';
import MarketDisplay from '../client/components/MarketDisplay'
import MarketsDisplay from '../client/components/MarketsDisplay';

// config
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Checking React Redux App...', () => {
  let wrapper;
  let store;
  beforeAll(() => {
    store = createStore(reducers);
    wrapper = mount(<Provider store={store}><App /></Provider>)
  })

  describe('Initial render', () => {
    it('The correct components have rendered', () => {
      expect(wrapper.find(App).length).toBe(1);
      expect(wrapper.find(MainContainer).length).toBe(1);
      expect(wrapper.find(MarketsContainer).length).toBe(1);
      expect(wrapper.find(TotalsDisplay).length).toBe(1);
      expect(wrapper.find(MarketCreator).length).toBe(1);
      expect(wrapper.find(MarketDisplay).length).toBe(1);
    })
    it ('The correct components have not rendered', () => {
      expect(wrapper.find(MarketsDisplay).length).toBe(0);
    })
  })

  describe('State changes', () => {
    it('Correctly initialized state', () => {
      expect(wrapper.props().store.getState().markets.totalMarkets).toBe(0);
      expect(wrapper.props().store.getState().markets.totalCards).toBe(0);
      expect(wrapper.props().store.getState().markets.marketList.length).toBe(0);
      expect(wrapper.props().store.getState().markets.lastMarketId).toBe(10000);
    })

    it('Should create new markets', () => {
      wrapper.find('#addMarket').simulate('click');
      expect(wrapper.props().store.getState().markets.totalMarkets).toBe(1);
      expect(wrapper.props().store.getState().markets.marketList.length).toBe(1);
      expect(wrapper.props().store.getState().markets.marketList[0].marketId).toBe(10001);
      expect(wrapper.props().store.getState().markets.marketList[0].cards).toBe(0);
      expect(wrapper.find('div.marketBox').length).toBe(1);
    })

    it('Should add cards to a market', () => {
      wrapper.find('#addCard').simulate('click');
      expect(wrapper.props().store.getState().markets.totalCards).toBe(1);
      expect(wrapper.props().store.getState().markets.marketList[0].cards).toBe(1);
      expect(wrapper.find('div.marketBox').length).toBe(1);
    })

    it('Should delete cards in a market', () => {
      wrapper.find('#deleteCard').simulate('click');
      expect(wrapper.props().store.getState().markets.totalCards).toBe(0);
      expect(wrapper.props().store.getState().markets.marketList[0].cards).toBe(0);
      expect(wrapper.find('div.marketBox').length).toBe(1);
    })

    it('Should not delete cards when total cards is 0', () => {
      wrapper.find('#deleteCard').simulate('click');
      expect(wrapper.props().store.getState().markets.totalCards).toBe(0);
      expect(wrapper.props().store.getState().markets.marketList[0].cards).toBe(0);
      expect(wrapper.find('div.marketBox').length).toBe(1);
    })
  })
})