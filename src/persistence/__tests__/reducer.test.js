import reducer, { INITIAL_STATE } from '../reducer';
import { EXCLUSIONS_FETCHED } from '../action-types';

describe('persistence/reducer', () => {
  it('has the expected initial state', () => {
    expect(reducer()).toEqual(INITIAL_STATE);
  });
  it('updates when it receives EXCLUSIONS_FETCHED', () => {
    const payload = {
      exclusions: { 1: 'X' },
      reserve: { 2: 10 },
      target: 0,
    };
    const action = { payload, type: EXCLUSIONS_FETCHED };
    expect(reducer(undefined, action)).toEqual(payload);
  });
});