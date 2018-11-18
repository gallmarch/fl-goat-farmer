import axios from 'axios';

import {
  MYSELF_FETCHING,
  MYSELF_SUCCESS,
} from './action-types';

export default fetchMyself(axios);

export function fetchMyself(service) {
  return ({ store }) => {
    store.dispatch({ type: MYSELF_FETCHING });
    service.get('//api.fallenlondon.com/api/character/myself')
      .then(({ data }) => {
        // console.info('fetched myself!');
        // console.info(data);
        store.dispatch({ type: MYSELF_SUCCESS, payload: data });
      });
  };
}