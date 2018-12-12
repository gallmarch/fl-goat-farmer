import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ExtensionUI from './ExtensionUI';

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