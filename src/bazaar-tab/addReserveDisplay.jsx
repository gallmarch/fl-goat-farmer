import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ReserveDisplay from './ReserveDisplay';

export default function addReserveDisplay({ el, qualityId, store }) {
  const container = document.createElement('div');
  container.id = `flgf__reserve-display-container--${qualityId}`;
  el.appendChild(container);
  ReactDOM.render(
    <Provider store={store}>
      <ReserveDisplay qualityId={qualityId} />
    </Provider>,
    container,
  );
}