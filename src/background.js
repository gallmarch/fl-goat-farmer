import axios from 'axios';
import { AUTHORIZATION_HEADER_CHANGED } from './auth/action-types';
import { EXCHANGE_URL } from './bazaar-tab/constants';
import { EXCHANGE_SUCCESS, FETCH_EXCHANGE_REQUESTED } from './bazaar-tab/action-types';
import { MYSELF_URL } from './myself/fetchMyself';
import { FETCH_MYSELF_REQUESTED, MYSELF_SUCCESS } from './myself/action-types';

let authorizationHeader;

chrome.runtime.onMessage.addListener(onRuntimeMessage);

/**
 * Listener for messages from the content script
 * @param message A { type, payload } object
 * @param sender The sender (to which we can respond)
 * @returns {*}
 */
function onRuntimeMessage(message, sender) {
  switch (message.type) {
    case AUTHORIZATION_HEADER_CHANGED:
      return setAuthorizationHeader(message.payload);
    case FETCH_EXCHANGE_REQUESTED:
      return fetchExchange(sender);
    case FETCH_MYSELF_REQUESTED:
      return fetchMyself(sender);
    default:
      console.info(`onRuntimeMessage(message=${message.type}) isn't recognized`); // eslint-disable-line no-console
      return undefined;
  }
}

/**
 * Fetch the bazaar stuff from the API and return it to the sender
 * @param sender
 */
function fetchExchange(sender) {
  const respond = makeResponse(sender);
  axios.get(EXCHANGE_URL, {
    headers: { Authorization: authorizationHeader },
  }).then(({ data }) => {
    respond({ type: EXCHANGE_SUCCESS, payload: data });
  });
}

/**
 * Fetch character details from the API and return to the sender
 * @param sender
 */
function fetchMyself(sender) {
  const respond = makeResponse(sender);
  axios.get(MYSELF_URL, {
    headers: { Authorization: authorizationHeader },
  }).then(({ data }) => respond({ type: MYSELF_SUCCESS, payload: data }));
}

function makeResponse(sender) {
  return (message) => {
    chrome.tabs.sendMessage(
      sender.tab.id,
      message,
    );
  };
}

/**
 * Set the authorization header (for making authenticated calls to the API)
 * @param header
 */
function setAuthorizationHeader(header) {
  authorizationHeader = header;
}
