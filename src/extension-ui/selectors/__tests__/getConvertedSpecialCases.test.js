// import { PENNY_QUALITY_ID } from '../../constants';
import { isSpecialCase, convertSpecialCase } from '../getConvertedSpecialCases';
import { CRYPTIC_CLUE, AN_IDENTITY_UNCOVERED, TOUCHING_LOVE_STORY } from '../constants';

describe('isSpecialCase', () => {
  it('returns true if this availability is something we can deal with', () => {
    [CRYPTIC_CLUE, AN_IDENTITY_UNCOVERED, TOUCHING_LOVE_STORY].forEach((id) => {
      const a = { availability: { purchaseQuality: { id } } };
      expect(isSpecialCase(a)).toBe(true);
    });
  });
});

describe('convertSpecialCase', () => {
  it('replaces the existing purchaseQuality with an equivalent value in pennies', () => {
    const a = { availability: { sellPrice: 100, purchaseQuality: { id: CRYPTIC_CLUE } } };
    expect(convertSpecialCase(a).availability.sellPrice).toBe(200);
  });
});