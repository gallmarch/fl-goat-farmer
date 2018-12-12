/* eslint-disable no-alert, no-console */
import MutationSummary from 'mutation-summary';

import { EXCLUSIONS_FETCHED } from '../persistence/action-types';
import makeUpdateReserve from './makeUpdateReserve';

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
    const { added } = summaries[0];
    if (!added) {
      return;
    }

    const updateReserve = makeUpdateReserve({ store, storage });

    // Check which shop is active; if it's not "Sell my things" then return
    const activeMenuItem = document.querySelector('.menu-item--active');
    const sellMyThingsIsActive = activeMenuItem.innerText !== 'Sell my things';

    // Give each shop item an onclick
    [...document.querySelectorAll('.shop__item')].forEach((el) => {
      // Check the flag --- if we already have a listener on this item, then return
      if (el.classList.contains('flgf-has-listener')) {
        return;
      }

      // This is the shop item's quality ID
      const qualityId = el.getAttribute('data-quality-id');

      // If the item is excluded, give it the appropriate class
      const {
        persistence: { exclusions },
      } = store.getState();
      if (exclusions[qualityId]) {
        el.classList.add('flgf--disabled');
      }

      // Add an exclusion toggle
      el.querySelector('.icon > div').addEventListener('click', makeClickHandler(el));

      // Add a reserve button + onclick
      const reserveButton = document.createElement('button');
      el.querySelector('.item__controls').insertBefore(reserveButton, el.querySelector('js-bazaar-sell'));
      reserveButton.classList.add('button', 'button--tertiary', 'button--sm');
      reserveButton.innerText = 'Reserve';
      reserveButton.addEventListener('click', () => {
        const { persistence: { reserve } } = store.getState();
        const amount = window.prompt('Enter the number of items you want to reserve.', reserve[qualityId] || 0);
      });

      // Set the flag; we're done
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