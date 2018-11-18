import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import addAuthListener from './auth/addAuthListener';
import addBazaarTabListener from './bazaar-tab/addBazaarTabListener';
import reducer from './reducer';
import './styles.scss';

const storage = chrome.storage.local;
const store = applyMiddleware(thunk)(createStore)(reducer);

addAuthListener({ store, storage });
addBazaarTabListener({ store, storage });