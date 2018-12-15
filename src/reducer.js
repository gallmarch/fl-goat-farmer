import { combineReducers } from 'redux';

import auth from './auth/reducer';
import exchange from './bazaar-tab/reducer';
import myself from './myself/reducer';
import exclusions from './exclusions/reducer';
import reserve from './reserve/reducer';
import target from './target/reducer';

export default combineReducers({
  auth,
  exchange,
  exclusions,
  myself,
  reserve,
  target,
});