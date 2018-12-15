import MutationSummary from 'mutation-summary';

import fetchBazaarStuff from './fetchBazaarStuff';
import fetchMyself from '../myself/fetchMyself';
import insertExtensionUI from '../extension-ui/insertExtensionUI';

/**
 * Listen for the addition of an .exchange__title element
 * and add the extension UI to the DOM
 * @param {*} param0
 */
export default function addBazaarTabListener({ store }) {
  const rootNode = document.querySelector('body');
  const queries = [{
    element: '.exchange__title',
  }];
  return new MutationSummary({
    rootNode,
    queries,
    callback: makeCallback({ store }),
  });
}

function makeCallback({ store }) {
  return () => {
    // Return early if we're not on the right tab, or if we've already
    // inserted the extension UI
    const isActive = !!document.querySelector('[data-name="bazaar"].nav__item.active');
    const existingElement = !!document.querySelector('#flgf-root');
    if (!isActive || existingElement) {
      return;
    }

    // Retrieve bazaar info
    fetchBazaarStuff({ store });

    // Fetch character data
    fetchMyself({ store });

    // Add the extension UI
    insertExtensionUI({ store });
  };
}