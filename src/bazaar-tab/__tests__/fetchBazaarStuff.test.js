import fetchBazaarStuff from '../fetchBazaarStuff';

describe('fetchBazaarStuff', () => {
  it('calls sendMessage', async () => {
    const sendMessage = jest.fn();
    const chrome = { runtime: { sendMessage } };
    await fetchBazaarStuff({ chrome });
    expect(sendMessage).toHaveBeenCalled();
  });
});