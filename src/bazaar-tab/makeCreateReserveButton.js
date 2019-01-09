/* eslint-disable no-alert */
import makeUpdateReserve from '../reserve/makeUpdateReserve';

export default function makeCreateReserveButton({ characterId, store }) {
  return function createReserveButton({ el, qualityId }) {
    // Make a reserve-updating function
    const updateReserve = makeUpdateReserve({ store });
    const reserveButton = document.createElement('button');
    el.querySelector('.item__controls').insertBefore(reserveButton, el.querySelector('js-bazaar-sell'));
    reserveButton.classList.add('button', 'button--tertiary', 'button--sm');
    reserveButton.innerText = 'Reserve';
    reserveButton.addEventListener('click', () => {
      const { reserve: { [characterId]: reserve = {} } } = store.getState();
      const amount = window.prompt(
        'Enter the number of items you want to reserve.',
        reserve[qualityId] || 0,
      );
      updateReserve({ qualityId, amount });
    });
  };
}