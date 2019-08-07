import unsetAuthHeader from '../unsetAuthHeader';
import setAuthHeader from '../setAuthHeader';

describe('unsetAuthHeader', () => {
  beforeEach(() => {
    const sendMessage = () => true;
    const chrome = { runtime: { sendMessage } };
    setAuthHeader({ chrome, access_token: 'some initial access token' });
  });

  afterAll(() => {
    const sendMessage = () => true;
    const chrome = { runtime: { sendMessage } };
    unsetAuthHeader({ chrome });
  });

  it('removes the Authorization header', () => {
    const sendMessage = jest.fn();
    const chrome = { runtime: { sendMessage } };
    unsetAuthHeader({ chrome });
    expect(sendMessage).toHaveBeenCalled();
  });
});