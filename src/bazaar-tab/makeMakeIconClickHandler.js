import { EXCLUSIONS_FETCHED } from '../persistence/action-types';

// TODO: this is a terrible name.
export default function makeMakeIconClickHandler({ storage, store }) {
  return el => () => {
    const qualityId = el.getAttribute('data-quality-id');
    const {
      auth: { characterId },
      persistence: { exclusions, reserve },
    } = store.getState();

    // Toggle the display class
    el.classList.toggle('flgf--disabled');

    // Update storage
    storage.set({
      [characterId]: {
        reserve,
        exclusions: {
          ...exclusions,
          [qualityId]: !exclusions[qualityId],
        },
      },
    });

    storage.get(characterId, (stuff) => {
      store.dispatch({
        type: EXCLUSIONS_FETCHED,
        payload: stuff[characterId],
      });
    });
  };
}
