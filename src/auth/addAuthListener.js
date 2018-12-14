import axios from 'axios';
import makeCheckLocalStorage from './makeCheckLocalStorage';

const CHECK_LOCAL_STORAGE_INTERVAL = 100;

/**
 * Poll window.localStorage every 100 ms to check the JWT
 * @param {Object} param0
 */
export default function addAuthListener({ store }) {
  const checkLocalStorage = makeCheckLocalStorage({ axios, store });
  window.setInterval(checkLocalStorage, CHECK_LOCAL_STORAGE_INTERVAL);
}