import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { shallow, render, mount } from 'enzyme';

import App from '../client/App';
import MainContainer from '../client/containers/MainContainer'
import MarketsContainer from '../client/containers/MainContainer'
import reducers from './../client/reducers/reducers';
import TotalDisplay from '../client/components/TotalsDisplay'

// config
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TotalsDisplay from '../client/components/TotalsDisplay';
configure({ adapter: new Adapter() });

// rules of thumb
// Always begin with shallow
// If componentDidMount or componentDidUpdate should be tested, use mount
// If you want to test component lifecycle and children behavior, use mount
// If you want to test children rendering with less overhead than mount and you are not interested in lifecycle methods, use render

describe('App component', () => {
  it('renders to the page', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(MainContainer).length).toBe(1);
  })
})

// when store is required, either have the option of exporting the class w/o being run through connect
// ...or wrap it in Provider here

describe('MainContainer component', () => {
  let wrapper;
  let store;
  beforeAll(() => store = createStore(reducers))
  beforeEach(() => wrapper = mount(<Provider store={store}><MainContainer /></Provider>))
  it('Renders to the page', () => {
    expect(wrapper.find('div.container').length).toBe(1);
    expect(wrapper.find('div.outerBox').length).toBe(1);
    expect(wrapper.find('#header').length).toBe(1);
    expect(wrapper.find(MainContainer).length).toBe(1);
    expect(wrapper.find(TotalsDisplay).length).toBe(1);
  })
})