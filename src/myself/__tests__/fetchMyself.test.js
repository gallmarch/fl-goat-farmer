import { MYSELF_URL, fetchMyself } from '../fetchMyself';

import {
  MYSELF_FETCHING,
  MYSELF_SUCCESS,
} from '../action-types';

describe('fetchMyself', () => {
  let dispatch;
  let get;
  let service;
  let store;

  beforeEach(() => {
    dispatch = jest.fn();
    get = jest.fn(() => ({ data: {} }));
    service = { get };
    store = { dispatch };
  });

  it('calls service.get', async () => {
    await fetchMyself(service)({ store });
    expect(get).toHaveBeenCalledWith(MYSELF_URL);
  });

  it('dispatches actions', async () => {
    await fetchMyself(service)({ store });
    expect(dispatch).toHaveBeenCalledWith({ type: MYSELF_FETCHING });
    expect(dispatch).toHaveBeenCalledWith({ type: MYSELF_SUCCESS, payload: {} });
  });
});