/* eslint-disable no-param-reassign, camelcase */

import { AUTHORIZATION_HEADER_CHANGED } from './action-types';

let authorizationHeader;

export default function setAuthHeader({ access_token, chrome }) {
  const header = access_token && `Bearer ${access_token.replace(/"/g, '')}`;
  if (header !== authorizationHeader) {
    authorizationHeader = header;
    chrome.runtime.sendMessage({ type: AUTHORIZATION_HEADER_CHANGED, payload: header });
  }
}
