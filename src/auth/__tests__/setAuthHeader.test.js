/* eslint-disable camelcase */
import setAuthHeader from '../setAuthHeader';
import { AUTHORIZATION_HEADER_CHANGED } from '../action-types';

describe('setAuthHeader', () => {
  it('sets the default Authorization header', () => {
    // const axios = { defaults: { headers: { common: {} } } };
    const sendMessage = jest.fn();
    const chrome = { runtime: { sendMessage } };
    const access_token = 'be-sure-to-drink-your-ovaltine';
    const expected = { type: AUTHORIZATION_HEADER_CHANGED, payload: `Bearer ${access_token}` };
    setAuthHeader({ access_token, chrome });
    expect(sendMessage).toHaveBeenCalledWith(expected);
  });
});