import axios from 'axios';

import {
  MYSELF_FETCHING,
  MYSELF_SUCCESS,
} from './action-types';

export const MYSELF_URL = 'https://api.fallenlondon.com/api/character/myself';

export default fetchMyself(axios);

export function fetchMyself(service) {
  return async ({ store }) => {
    store.dispatch({ type: MYSELF_FETCHING });
    const { data } = await service.get(MYSELF_URL);
    store.dispatch({ type: MYSELF_SUCCESS, payload: data });
  };
}