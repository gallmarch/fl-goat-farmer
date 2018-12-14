import { LOGGED_IN, LOGGED_OUT } from '../action-types';
import reducer, { INITIAL_STATE } from '../reducer';

describe('auth/reducer', () => {
  it('has the expected initial state', () => {
    expect(reducer()).toEqual(INITIAL_STATE);
  });
  it('handles login events', () => {
    const characterId = 65536;
    const action = { type: LOGGED_IN, payload: { characterId } };
    const expected = { characterId, authenticated: true };
    expect(reducer(INITIAL_STATE, action)).toEqual(expected);
  });
  it('handles logout events', () => {
    const action = { type: LOGGED_OUT };
    const expected = { authenticated: false };
    expect(reducer(INITIAL_STATE, action)).toEqual(expected);
  });
});