import getTarget from '../getTarget';

describe('getTarget', () => {
  it('returns 0 if it finds nothing in state', () => {
    const state = {
      auth: {},
      target: {},
    };
    expect(getTarget(state)).toBe(0);
  });

  it('returns the target if it\'s in state', () => {
    const characterId = 100;
    const expected = 11712.8;
    const state = {
      auth: { characterId },
      target: { [characterId]: expected },
    };
    expect(getTarget(state)).toBe(expected);
  });
});