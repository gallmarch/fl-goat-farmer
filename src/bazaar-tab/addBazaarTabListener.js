import MutationSummary from 'mutation-summary';

import fetchBazaarStuff from './fetchBazaarStuff';
import fetchMyself from '../myself/fetchMyself';
import insertThing from './insertThing';

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
    const isActive = !!document.querySelector('[data-name="bazaar"].nav__item.active');
    const existingElement = !!document.querySelector('#flgf-root');
    if (!isActive || existingElement) {
      return;
    }
    fetchBazaarStuff({ store });
    fetchMyself({ store });
    insertThing({ store });
  };
}