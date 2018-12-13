/* eslint-disable no-alert */
import { EXCLUSIONS_FETCHED } from '../persistence/action-types';

export default function makeUpdateTarget({ storage }) {
  return (dispatch, getState) => {
    const target = window.prompt('Enter your new target, in Echoes', getState().persistence.target || 0);

    if (target === null) {
      return;
    }

    const {
      auth: { characterId },
      persistence: { exclusions, reserve },
    } = getState();

    storage.set({
      [characterId]: { exclusions, reserve, target },
    });
    storage.get(characterId, (stuff) => {
      dispatch({ type: EXCLUSIONS_FETCHED, payload: stuff[characterId] });
    });
  };
}
