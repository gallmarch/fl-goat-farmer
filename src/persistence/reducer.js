import {
  EXCLUSIONS_FETCHED,
} from './action-types';

export const INITIAL_STATE = {
  exclusions: {},
  reserve: {},
  target: 0,
};

export default function reducer(state = INITIAL_STATE, { type, payload } = {}) {
  switch (type) {
    case EXCLUSIONS_FETCHED:
      return {
        ...state,
        exclusions: payload.exclusions,
        reserve: payload.reserve,
        target: payload.target,
      };
    default:
      return state;
  }
}