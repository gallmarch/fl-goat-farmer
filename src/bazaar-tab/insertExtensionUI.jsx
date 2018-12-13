import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ExtensionUI from './ExtensionUI';

/**
 * Insert the extension's UI into the DOM, with the store as its provider
 * @param {Object} param0
 */
export default function insertExtensionUI({ store }) {
  const parent = document.querySelector('.exchange__title').parentNode;
  const container = document.createElement('div');
  container.id = 'flgf-root';
  parent.insertBefore(container, parent.querySelector('hr'));
  ReactDOM.render(
    <Provider store={store}>
      <ExtensionUI />
    </Provider>,
    container,
  );
}