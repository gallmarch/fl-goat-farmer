import {
  FETCH_MYSELF_REQUESTED,
} from './action-types';

export const MYSELF_URL = 'https://api.fallenlondon.com/api/character/myself';

export default function fetchMyself({ chrome }) {
  chrome.runtime.sendMessage({ type: FETCH_MYSELF_REQUESTED });
}