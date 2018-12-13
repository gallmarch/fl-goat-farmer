import { MYSELF_URL, fetchMyself } from '../fetchMyself';

import {
  MYSELF_FETCHING,
  MYSELF_SUCCESS,
} from '../action-types';

const dispatch = jest.fn();
const get = jest.fn(() => ({ data: {} }));
const service = { get };
const store = { dispatch };

describe('fetchMyself', () => {
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