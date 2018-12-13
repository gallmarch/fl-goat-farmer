import { PENNY_QUALITY_ID } from '../constants';
import getLiquidity from '../getLiquidity';

describe('getLiquidity', () => {
  it('returns 0 if state is empty', () => {
    expect(getLiquidity({
      exchange: { availabilities: [] },
      persistence: {},
      myself: { qualities: [] },
    })).toBe(0);
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
      exchange: { availabilities },
      myself: { qualities },
      persistence: {
        exclusions: {},
        reserve: {},
      },
    };
    expect(getLiquidity(state)).toBe(160);
  });
});