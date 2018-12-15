import '@babel/polyfill';

import addAuthListener from './auth/addAuthListener';
import addBazaarTabListener from './bazaar-tab/addBazaarTabListener';
import addExchangeItemChangeListener from './bazaar-tab/addExchangeItemChangeListener';
import './styles.scss';

import configureStore from './configureStore';

import fetchBazaarStuff from './bazaar-tab/fetchBazaarStuff';
import fetchMyself from './myself/fetchMyself';

const { store } = configureStore();

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