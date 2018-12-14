import { LOGGED_IN, LOGGED_OUT } from './action-types';

export const INITIAL_STATE = {
  authenticated: false,
  characterId: undefined,
};

export default function reducer(state = INITIAL_STATE, { type, payload } = {}) {
  switch (type) {
    case LOGGED_IN:
      return {
        authenticated: true,
        characterId: payload.characterId,
      };
    case LOGGED_OUT:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}
