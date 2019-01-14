import { getTargetOrDefault } from '../insertExtensionUI';

describe('getTargetOrDefault', () => {
  it('returns the target as a fixed-length decimal if it\'s in the store', () => {
    const characterId = 110110;
    const target = 11712.8;
    const getState = jest.fn(() => ({
      target: { [characterId]: target },
    }));
    const store = { getState };
    const expectedTarget = target.toFixed(2);
    expect(getTargetOrDefault({ store, characterId })).toEqual(expectedTarget);
  });
});