import { RESERVE_UPDATED } from './action-types';

const INITIAL_STATE = {};

export default function reducer(state = INITIAL_STATE, { type, payload } = {}) {
  switch (type) {
    case RESERVE_UPDATED:
      return state;
    default:
      return state;
  }
}