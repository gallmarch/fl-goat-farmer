import { combineReducers } from 'redux';

import auth from './auth/reducer';
import exchange from './bazaar-tab/reducer';
import myself from './myself/reducer';
import persistence from './persistence/reducer';

export default combineReducers({
  auth,
  exchange,
  myself,
  persistence,
});