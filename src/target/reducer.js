import getCharacterId from '../auth/getCharacterId';
import { TARGET_UPDATED } from './action-types';

export const INITIAL_STATE = {};

export default function reducer(state = INITIAL_STATE, { type, payload } = {}) {
  switch (type) {
    case TARGET_UPDATED:
      return {
        ...state,
        [getCharacterId()]: payload,
      };
    default:
      return state;
  }
}