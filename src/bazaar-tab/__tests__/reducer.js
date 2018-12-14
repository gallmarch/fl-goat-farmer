import { EXCHANGE_SUCCESS } from '../action-types';
import reducer, { INITIAL_STATE } from '../reducer';

describe('bazaar/reducer', () => {
  it('has the expected initial state', () => {
    expect(reducer()).toEqual(INITIAL_STATE);
  });
  it('handles EXCHANGE_SUCCESS events', () => {
    const payload = ['one', 'two', '3', 4];
    const action = { payload, type: EXCHANGE_SUCCESS };
    const expected = { availabilities: payload };
    expect(reducer(INITIAL_STATE, action)).toEqual(expected);
  });
});