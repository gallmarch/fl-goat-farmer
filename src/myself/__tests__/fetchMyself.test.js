import fetchMyself from '../fetchMyself';

describe('fetchMyself', () => {
  it('calls sendMessage', async () => {
    const sendMessage = jest.fn();
    const chrome = { runtime: { sendMessage } };
    await fetchMyself(chrome);
    expect(sendMessage).toHaveBeenCalled();
  });
});