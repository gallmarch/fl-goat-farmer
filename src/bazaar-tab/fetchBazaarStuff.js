import axios from 'axios';

import {
  EXCHANGE_FETCHING,
  EXCHANGE_SUCCESS,
} from './action-types';

export default fetchBazaarStuff(axios);

export function fetchBazaarStuff(service) {
  return ({ store }) => {
    store.dispatch({ type: EXCHANGE_FETCHING });
    service.get('//api.fallenlondon.com/api/exchange/availabilities?shopid=null')
      .then(({ data }) => {
        store.dispatch({ type: EXCHANGE_SUCCESS, payload: data });
      });
  };
}