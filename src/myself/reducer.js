import {
  MYSELF_SUCCESS,
} from './action-types';

const INITIAL_STATE = {
  qualities: [],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case MYSELF_SUCCESS:
      return {
        ...state,
        qualities: payload.possessions.reduce((acc, next) => {
          const { possessions } = next;
          return [...acc, ...possessions];
        }, []),
      };
    default:
      return state;
  }
}