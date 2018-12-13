import { PENNY_QUALITY_ID } from '../constants';
import getStuffThatSellsForPennies from '../getStuffThatSellsForPennies';

describe('getStuffThatSellsForPennies', () => {
  it('finds availabilities that sell for pennies', () => {
    const availabilities = [{
      availability: {
        purchaseQuality: { id: PENNY_QUALITY_ID },
        quality: { id: 1 },
        sellPrice: 80,
      },
    }];
    const exclusions = {};
    expect(getStuffThatSellsForPennies(availabilities, exclusions)).toEqual(availabilities);
  });
});