import {
  EXCLUSIONS_FETCHED,
} from './action-types';

const INITIAL_STATE = {
  exclusions: {},
  reserve: {},
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case EXCLUSIONS_FETCHED:
      return {
        ...state,
        exclusions: payload.exclusions,
        reserve: payload.reserve,
      };
    default:
      return state;
  }
}