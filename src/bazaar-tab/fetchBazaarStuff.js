import { FETCH_EXCHANGE_REQUESTED } from './action-types';

export default function fetchBazaarStuff() {
  chrome.runtime.sendMessage({ type: FETCH_EXCHANGE_REQUESTED });
}