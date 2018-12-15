import getCharacterId from '../auth/getCharacterId';
import { RESERVE_UPDATED } from './action-types';

export const INITIAL_STATE = {};

export default function reducer(state = INITIAL_STATE, { type, payload } = {}) {
  switch (type) {
    case RESERVE_UPDATED: {
      const { qualityId, amount } = payload;
      const characterId = getCharacterId();
      const currentReserve = state[characterId] || {};
      return {
        ...state,
        [characterId]: {
          ...currentReserve,
          [qualityId]: amount,
        },
      };
    }
    default:
      return state;
  }
}