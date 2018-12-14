import axios from 'axios';

import { EXCHANGE_FETCHING, EXCHANGE_SUCCESS } from './action-types';
import { EXCHANGE_URL } from './constants';

export default fetchBazaarStuff(axios);

export function fetchBazaarStuff(service) {
  return async ({ store }) => {
    store.dispatch({ type: EXCHANGE_FETCHING });
    const { data } = await service.get(EXCHANGE_URL);
    store.dispatch({ type: EXCHANGE_SUCCESS, payload: data });
  };
}