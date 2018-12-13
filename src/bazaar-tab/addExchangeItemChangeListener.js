/* eslint-disable no-alert, no-console */
import MutationSummary from 'mutation-summary';

import addReserveDisplay from '../reserve/addReserveDisplay';
import makeMakeIconClickHandler from './makeMakeIconClickHandler';
import makeUpdateReserve from '../reserve/makeUpdateReserve';

export default function addExchangeItemChangeListener({ store, storage }) {
  const rootNode = document.querySelector('body');
  const queries = [
    // { element: '.shop__item' },
    { element: '.shop__item' },
  ];

  console.info('adding a listener for exchange items');
  return new MutationSummary({
    rootNode,
    queries,
    callback,
  });

  function callback(summaries) {
    console.info('summaries');
    console.info(summaries);
    // Return early if nothing was added
    /*
    const { added } = summaries[0];
    if (!added) {
      return;
    }
    */

    // Get the current list of exclusions from store
    const { persistence: { exclusions } } = store.getState();

    // Make an el => el.onClick = () => {/* ... */} handler-creator
    const makeIconClickHandler = makeMakeIconClickHandler({ store, storage });

    // Make a reserve-updating function
    const updateReserve = makeUpdateReserve({ store, storage });

    // Check which shop is active; if it's not "Sell my things" then return
    const activeMenuItem = document.querySelector('.menu-item--active');
    const sellMyThingsIsActive = !!activeMenuItem && activeMenuItem.innerText === 'Sell my things';

    // Iterate over shop items, giving each a click listener
    [...document.querySelectorAll('.shop__item')].forEach((el) => {
      // Make an onClick for this element
      const onClick = makeIconClickHandler(el);

      // Check the flag --- if we already have a listener on this item, then return
      if (el.classList.contains('flgf-has-listener')) {
        return;
      }

      // This is the shop item's quality ID
      const qualityId = el.getAttribute('data-quality-id');

      // If the item is excluded and we are selling things, give it the appropriate class;
      // otherwise, remove it (the element may be reused by React's render algorithm)
      if (exclusions[qualityId] && sellMyThingsIsActive) {
        el.classList.add('flgf--disabled');
      }

      // Add an exclusion toggle (i.e. all of this item is reserved)
      el.querySelector('.icon > div').addEventListener('click', onClick);

      // Add a reserve button + onclick (i.e., an arbitrary quantity of this item is reserved)
      const reserveButton = document.createElement('button');
      el.querySelector('.item__controls').insertBefore(reserveButton, el.querySelector('js-bazaar-sell'));
      reserveButton.classList.add('button', 'button--tertiary', 'button--sm');
      reserveButton.innerText = 'Reserve';
      reserveButton.addEventListener('click', () => {
        const { persistence: { reserve } } = store.getState();
        const amount = window.prompt('Enter the number of items you want to reserve.', reserve[qualityId] || 0);
        updateReserve({ qualityId, amount });
      });

      // Add a 'Reserved: ' display
      addReserveDisplay({ el, qualityId, store });

      // Set the flag; we're done
      el.classList.add('flgf-has-listener');
    });
  }
}