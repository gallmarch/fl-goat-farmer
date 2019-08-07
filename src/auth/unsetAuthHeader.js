/* eslint-disable no-param-reassign */

import setAuthHeader from './setAuthHeader';

export default function unsetAuthHeader({ chrome }) {
  setAuthHeader({ chrome, access_token: undefined });
}
