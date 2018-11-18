import {
  EXCHANGE_SUCCESS,
} from './action-types';

const INITIAL_STATE = {
  availabilities: [],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case EXCHANGE_SUCCESS:
      return {
        ...state,
        availabilities: payload,
      };
    default:
      return state;
  }
}