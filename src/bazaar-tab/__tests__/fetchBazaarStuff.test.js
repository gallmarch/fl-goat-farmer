import { fetchBazaarStuff } from '../fetchBazaarStuff';
import { EXCHANGE_FETCHING, EXCHANGE_SUCCESS } from '../action-types';
import { EXCHANGE_URL } from '../constants';

describe('fetchBazaarStuff', () => {
  let dispatch;
  let get;
  let service;
  let store;

  beforeEach(() => {
    get = jest.fn(() => ({ data: [] }));
    service = { get };
    dispatch = jest.fn();
    store = { dispatch };
  });

  it('calls the API', async () => {
    await fetchBazaarStuff(service)({ store });
    expect(get).toHaveBeenCalledWith(EXCHANGE_URL);
  });

  it('dispatches actions', async () => {
    await fetchBazaarStuff(service)({ store });
    expect(dispatch).toHaveBeenCalledWith({ type: EXCHANGE_FETCHING });
    expect(dispatch).toHaveBeenCalledWith({ type: EXCHANGE_SUCCESS, payload: [] });
  });
});