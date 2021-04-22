import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import pokeStore from './store/store.js'

ReactDOM.render(
  <Provider store={pokeStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

