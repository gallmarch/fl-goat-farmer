import { MYSELF_SUCCESS } from '../action-types';
import reducer, { INITIAL_STATE } from '../reducer';

describe('myself/reducer', () => {
  it('has the expected initial state', () => {
    expect(reducer()).toEqual(INITIAL_STATE);
  });
  it('handles the payloads it receives', () => {
    const qualities = [
      { id: 1, name: 'hat' },
      { id: 2, name: 'gloves' },
    ];
    const type = MYSELF_SUCCESS;
    const payload = { possessions: [{ possessions: qualities }] };
    expect(reducer(INITIAL_STATE, { type, payload })).toEqual({ qualities });
  });
});