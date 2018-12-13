import MutationSummary from 'mutation-summary';

import { EXCLUSIONS_FETCHED } from '../persistence/action-types';
import fetchBazaarStuff from './fetchBazaarStuff';
import fetchMyself from '../myself/fetchMyself';
import insertExtensionUI from './insertExtensionUI';

export default function addBazaarTabListener({ store, storage }) {
  const rootNode = document.querySelector('body');
  const queries = [{
    element: '.exchange__title',
  }];
  return new MutationSummary({
    rootNode,
    queries,
    callback: makeCallback({ store, storage }),
  });
}

function makeCallback({ store, storage }) {
  return () => {
    // Return early if we're not on the right tab, or if we've already
    // inserted the extension UI
    const isActive = !!document.querySelector('[data-name="bazaar"].nav__item.active');
    const existingElement = !!document.querySelector('#flgf-root');
    if (!isActive || existingElement) {
      if(isActive) {
        console.info('element already exists');
      }
      return;
    }

    // Retrieve bazaar info
    fetchBazaarStuff({ store });

    // Fetch character data
    fetchMyself({ store });

    // Add the extension UI
    insertExtensionUI({ store });

    // Get exclusions for this character ID
    const { auth: { characterId } } = store.getState();

    // Fetch stuff from storage, then dispatch a Redux action
    storage.get(characterId, (items) => {
      let payload;
      if (items[characterId]) {
        payload = { ...items[characterId] };
      } else {
        payload = {
          exclusions: {},
          reserve: {},
        };
      }
      // Dispatch an action
      store.dispatch({ payload, type: EXCLUSIONS_FETCHED });
    });
  };
}