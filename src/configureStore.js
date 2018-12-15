import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import reducer from './reducer';

export default function configureStore() {
  const persistConfig = {
    key: 'root',
    storage,
    // We only want to persist exclusions and reserve to storage; everything
    // else is ephemeral
    whitelist: ['exclusions', 'reserve', 'target'],
  };
  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = applyMiddleware(thunk)(createStore)(persistedReducer);
  const persistor = persistStore(store);

  return { persistor, store };
}
