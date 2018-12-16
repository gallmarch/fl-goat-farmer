/* eslint-disable no-alert */
import getCharacterId from '../auth/getCharacterId';

import { TARGET_UPDATED } from './action-types';

export default updateTarget(window);

export const PROMPT_TEXT = 'Enter your new target, in Echoes';

export function updateTarget(window) {
  return (dispatch, getState) => {
    const characterId = getCharacterId();
    const target = window.prompt(
      PROMPT_TEXT,
      getState().target[characterId] || 0,
    );
    const action = { type: TARGET_UPDATED, payload: target };
    dispatch(action);
  };
}