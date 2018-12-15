import getReserveLevel from '../getReserveLevel';

describe('getReserveLevel', () => {
  it('returns the reserve level if it\'s in state', () => {
    const characterId = 100;
    const expectedReserveLevel = 24601;
    const qualityId = 65536;
    const state = {
      auth: { characterId },
      reserve: { [characterId]: { [qualityId]: expectedReserveLevel } },
    };
    const props = { qualityId };


    expect(getReserveLevel(state, props)).toBe(expectedReserveLevel);
  });

  it('returns 0 if there\'s nothing in state', () => {
    const qualityId = 65536;
    const state = { auth: {}, reserve: {} };
    const props = { qualityId };
    expect(getReserveLevel(state, props)).toBe(0);
  });
});