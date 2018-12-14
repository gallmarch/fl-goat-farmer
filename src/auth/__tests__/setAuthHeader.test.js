/* eslint-disable camelcase */
import setAuthHeader from '../setAuthHeader';

describe('setAuthHeader', () => {
  it('sets the default Authorization header', () => {
    const axios = { defaults: { headers: { common: {} } } };
    const access_token = 'be-sure-to-drink-your-ovaltine';
    const expected = `Bearer ${access_token}`;
    setAuthHeader({ axios, access_token });
    expect(axios.defaults.headers.common.Authorization).toBe(expected);
  });
});