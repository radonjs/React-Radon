import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/reducers.js';
import App from './App.jsx';


const store = createStore(
  reducers,
  composeWithDevTools()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
