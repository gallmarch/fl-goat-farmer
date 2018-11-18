import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Thing from './Thing';

export default function insertThing({ store }) {
  const parent = document.querySelector('.exchange__title').parentNode;
  const container = document.createElement('div');
  container.id = 'flgf-root';
  parent.insertBefore(container, parent.querySelector('hr'));
  ReactDOM.render(
    <Provider store={store}>
      <Thing />
    </Provider>,
    container,
  );
}