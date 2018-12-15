import '@babel/polyfill';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import addAuthListener from './auth/addAuthListener';
import addBazaarTabListener from './bazaar-tab/addBazaarTabListener';
import addExchangeItemChangeListener from './bazaar-tab/addExchangeItemChangeListener';
import reducer from './reducer';
import './styles.scss';

import fetchBazaarStuff from './bazaar-tab/fetchBazaarStuff';
import fetchMyself from './myself/fetchMyself';

const store = applyMiddleware(thunk)(createStore)(reducer);

addAuthListener({ store });
addBazaarTabListener({ store });
addExchangeItemChangeListener({ store });

// Listen for events from the background page
chrome.runtime.onMessage.addListener(({ type }) => {
  // If a transaction has just completed, then re-fetch data
  if (type === 'TRANSACTION_COMPLETE') {
    fetchMyself({ store });
    fetchBazaarStuff({ store });
  }
});