import MutationSummary from 'mutation-summary';

import fetchBazaarStuff from './fetchBazaarStuff';
import fetchMyself from '../myself/fetchMyself';
import insertExtensionUI from '../extension-ui/insertExtensionUI';

/**
 * Listen for the addition of an .exchange__title element
 * and add the extension UI to the DOM
 * @param {*} param0
 */
export default function addBazaarTabListener({ chrome, store }) {
  const rootNode = document.querySelector('body');
  const queries = [{
    element: '.exchange__title',
  }];
  return new MutationSummary({
    rootNode,
    queries,
    callback: makeCallback({ chrome, store }),
  });
}

function makeCallback({ chrome, store }) {
  return () => {
    // Return early if we're not on the right tab, or if we've already
    // inserted the extension UI
    const isActive = !!document.querySelector(
      '[data-name="bazaar"].nav__item.active, [data-name="bazaar"].footer-menu__item.active',
    );
    const existingElement = !!document.querySelector('#flgf-root');
    if (!isActive || existingElement) {
      return;
    }

    // Retrieve bazaar info
    fetchBazaarStuff({ chrome, store });

    // Fetch character data
    fetchMyself({ chrome, store });

    // Add the extension UI
    insertExtensionUI({ store });
  };
}
