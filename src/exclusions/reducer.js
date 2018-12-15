import getCharacterId from '../auth/getCharacterId';
import { TOGGLE_EXCLUSION } from './action-types';

export const INITIAL_STATE = {};

export default function reducer(state = INITIAL_STATE, { type, payload } = {}) {
  switch (type) {
    case TOGGLE_EXCLUSION:
      return toggleExclusion(state, payload);
    default:
      return state;
  }
}

export function toggleExclusion(state, payload) {
  // Get the current character ID
  const characterId = getCharacterId();
  // Get exclusions for this character
  const exclusions = state[characterId] || {};
  // Get the quality ID we're toggling
  const qualityId = payload;
  // Return updated state
  return {
    ...state,
    [characterId]: {
      ...exclusions,
      [qualityId]: exclusions[qualityId] ? undefined : true,
    },
  };
}