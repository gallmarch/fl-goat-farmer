import { PENNY_QUALITY_ID } from '../../constants';
import getLiquidity from '../getLiquidity';

describe('getLiquidity', () => {
  it('returns 0 if state is empty', () => {
    const state = {
      auth: { characterId: 100 },
      exchange: { availabilities: [] },
      exclusions: {},
      myself: { qualities: [] },
      reserve: {},
    };
    expect(getLiquidity(state)).toBe(0);
  });

  it('returns the expected value if nothing is excluded', () => {
    const availabilities = [{
      availability: {
        purchaseQuality: { id: PENNY_QUALITY_ID },
        quality: { id: 1 },
        sellPrice: 80,
      },
    }];
    const qualities = [
      { id: 1, level: 2 },
    ];
    const state = {
      auth: { characterId: 100 },
      exchange: { availabilities },
      myself: { qualities },
      exclusions: {},
      reserve: {},
    };
    expect(getLiquidity(state)).toBe(160);
  });
});