import { EXCLUSIONS_FETCHED } from '../persistence/action-types';
import isSellingMyThings from '../sticky-menu/isSellingMyThings';

// TODO: this is a terrible name.
export default function makeMakeIconClickHandler({ storage, store }) {
  return el => () => {
    // If we're not selling our things, do nothing
    if (!isSellingMyThings()) {
      return;
    }

    // Get the current reserve state
    const {
      auth: { characterId },
      persistence: { exclusions, reserve, target },
    } = store.getState();

    // Toggle the display class
    el.classList.toggle('flgf--disabled');

    // Get the quality ID from the DOM node
    const qualityId = el.getAttribute('data-quality-id');

    // Update storage and dispatch a Redux action
    storage.set({
      [characterId]: {
        reserve,
        target,
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
