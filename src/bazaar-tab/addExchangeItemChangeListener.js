/* eslint-disable no-console */
import MutationSummary from 'mutation-summary';

import { EXCLUSIONS_FETCHED } from '../persistence/action-types';

export default function addExchangeItemChangeListener({ store, storage }) {
  const rootNode = document.querySelector('body');
  const queries = [{
    element: '.shop__item',
  }];

  return new MutationSummary({
    rootNode,
    queries,
    callback,
  });

  function callback(summaries) {
    // console.info(summaries); // eslint-disable-line no-console
    const { added } = summaries[0];
    if (!added) {
      return;
    }

    // store.dispatch({ type: 'something changed' });

    // Give each shop item an onclick
    [...document.querySelectorAll('.shop__item')].forEach((el) => {
      // Check the flag --- if we already have a listener on this item, then return
      if (el.classList.contains('flgf-has-listener')) {
        return;
      }

      const qualityId = el.getAttribute('data-quality-id');

      const { persistence: { exclusions } } = store.getState();
      if (exclusions[qualityId]) {
        el.classList.add('flgf--disabled');
      }

      // Add an exclusion toggle
      el.querySelector('.icon > div').addEventListener('click', makeClickHandler(el));

      // Set the flag
      el.classList.add('flgf-has-listener');
    });
  }

  function makeClickHandler(el) {
    return () => {
      const qualityId = el.getAttribute('data-quality-id');
      const {
        auth: { characterId },
        persistence: { exclusions, reserve },
      } = store.getState();

      el.classList.toggle('flgf--disabled');

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
}