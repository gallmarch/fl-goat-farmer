/* eslint-disable no-alert */
import getCharacterId from '../auth/getCharacterId';

import { TARGET_UPDATED } from './action-types';

export default function updateTarget() {
  return (dispatch, getState) => {
    const characterId = getCharacterId();
    const target = window.prompt(
      'Enter your new target, in Echoes',
      getState().target[characterId] || 0,
    );
    const action = { type: TARGET_UPDATED, payload: target };
    dispatch(action);
  };
}
