import unsetAuthHeader from '../unsetAuthHeader';

describe('unsetAuthHeader', () => {
  it('removes the Authorization header', () => {
    const axios = { defaults: { headers: { common: { Authorization: 'Bearer: be-sure-to-drink-your-ovaltine' } } } };
    unsetAuthHeader({ axios });
    expect(axios.defaults.headers.common.Authorization).toBe(undefined);
  });
});