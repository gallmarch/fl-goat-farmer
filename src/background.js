import axios from 'axios';
import { AUTHORIZATION_HEADER_CHANGED } from './auth/action-types';
import { EXCHANGE_URL } from './bazaar-tab/constants';
import { EXCHANGE_SUCCESS, FETCH_EXCHANGE_REQUESTED } from './bazaar-tab/action-types';
import { MYSELF_URL } from './myself/fetchMyself';
import { FETCH_MYSELF_REQUESTED, MYSELF_SUCCESS } from './myself/action-types';

const urls = [
  '*://*.api.fallenlondon.com/api/exchange/sell',
  '*://api.fallenlondon.com/api/exchange/sell',
  '*://*.api.fallenlondon.com/api/exchange/buy',
  '*://api.fallenlondon.com/api/exchange/buy',
];

let authorizationHeader;

chrome.webRequest.onCompleted.addListener(onTransactionComplete, { urls });
chrome.runtime.onMessage.addListener(onRuntimeMessage);


function onTransactionComplete() {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    (tabs) => {
      const [{ id }] = tabs;
      chrome.tabs.sendMessage(id, { type: 'TRANSACTION_COMPLETE' });
    },
  );
}

function onRuntimeMessage(message, sender) {
  switch (message.type) {
    case AUTHORIZATION_HEADER_CHANGED:
      return setAuthorizationHeader(message.payload);
    case FETCH_EXCHANGE_REQUESTED:
      return fetchExchange(sender);
    case FETCH_MYSELF_REQUESTED:
      return fetchMyself(sender);
    default:
      return undefined;
  }
}

function fetchExchange(sender) {
  const respond = makeResponse(sender);
  axios.get(EXCHANGE_URL, {
    headers: { Authorization: authorizationHeader },
  }).then(({ data }) => {
    respond({ type: EXCHANGE_SUCCESS, payload: data });
  });
}

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

function setAuthorizationHeader(header) {
  authorizationHeader = header;
}
