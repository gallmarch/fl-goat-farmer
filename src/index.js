import '@babel/polyfill';

import addAuthListener from './auth/addAuthListener';
import addBazaarTabListener from './bazaar-tab/addBazaarTabListener';
import addExchangeItemChangeListener from './bazaar-tab/addExchangeItemChangeListener';
import './styles.scss';

import configureStore from './configureStore';

import fetchBazaarStuff from './bazaar-tab/fetchBazaarStuff';
import fetchMyself from './myself/fetchMyself';

const { store } = configureStore();

// Listen for events from the background page
chrome.runtime.onMessage.addListener((message) => {
  // If a transaction has just completed, then re-fetch data
  if (message.type === 'TRANSACTION_COMPLETE') {
    fetchMyself();
    fetchBazaarStuff();
    return;
  }
  store.dispatch(message);
});

addAuthListener({ chrome, store });
addBazaarTabListener({ chrome, store });
addExchangeItemChangeListener({ chrome, store });

