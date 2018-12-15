import isSellingMyThings from '../sticky-menu/isSellingMyThings';
import { TOGGLE_EXCLUSION } from '../exclusions/action-types';

// TODO: this is a terrible name.
export default function makeMakeIconClickHandler({ store }) {
  return el => () => {
    // If we're not selling our things, do nothing
    if (!isSellingMyThings()) {
      return;
    }

    // Get the quality ID from the DOM node
    const qualityId = el.getAttribute('data-quality-id');

    // Update the store
    store.dispatch({ type: TOGGLE_EXCLUSION, payload: qualityId });

    // Toggle the display class
    el.classList.toggle('flgf--disabled');
  };
}
