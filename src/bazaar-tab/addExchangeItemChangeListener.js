import MutationSummary from 'mutation-summary';

export default function addExchangeItemChangeListener({ store, storage }) {
  // const toggleItemExclusion = getToggleItemExclusion({ storage });

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

      // Add an exclusion toggle
      el.querySelector('.icon > div').addEventListener('click', makeClickHandler(el));

      // Set the flag
      el.classList.add('flgf-has-listener');
    });
  }

  function makeClickHandler(el) {
    return () => {
      const qualityId = el.getAttribute('data-quality-id');
      console.info(`toggling exclusion for ${qualityId}`);
      el.classList.toggle('flgf--disabled');
    };
  }
}