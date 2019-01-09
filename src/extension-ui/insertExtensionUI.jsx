/* eslint-disable no-alert */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ExtensionUI from '../extension-ui/ExtensionUI';
import makeUpdateTarget from '../target/makeUpdateTarget';

export const PROMPT_TEXT = 'Enter your new target, in Echoes';

/**
 * Insert the extension's UI into the DOM, with the store as its provider
 * @param {Object} param0
 */
export default function insertExtensionUI({ store }) {
  const parent = document.querySelector('.exchange__title').parentNode;
  const container = document.createElement('div');

  const updateTarget = makeUpdateTarget({ store });

  // Handle clicks to the 'update' button
  const onClick = () => {
    // Get the current character ID
    const { auth: { characterId } } = store.getState();
    const target = window.prompt(
      PROMPT_TEXT,
      (store.getState().target[characterId] || 0).toFixed(2),
    );
    // If the user has cancelled, then return
    if (target === null) {
      return;
    }
    updateTarget(parseFloat(target));
  };

  container.id = 'flgf-root';
  parent.insertBefore(container, parent.querySelector('hr'));
  ReactDOM.render(
    <Provider store={store}>
      <ExtensionUI onClick={onClick} />
    </Provider>,
    container,
  );
}