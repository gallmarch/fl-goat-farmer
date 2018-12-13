import reducer, { INITIAL_STATE } from '../reducer';

describe('persistence/reducer', () => {
  it('has the expected initial state', () => {
    expect(reducer()).toEqual(INITIAL_STATE);
  });
});