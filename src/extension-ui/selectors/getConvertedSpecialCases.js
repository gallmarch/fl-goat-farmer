import { PENNY_QUALITY_ID } from '../constants';
import { SELL_PRICES } from './constants';

export function isSpecialCase(a) {
  // Does this item sell for something that isn't Pennies, but we know how to convert to Pennies?
  const { availability: { purchaseQuality: { id } } } = a;
  return Object.keys(SELL_PRICES).map(k => parseInt(k, 10)).indexOf(id) >= 0;
}

/**
 * Convert an availability object to one that sells for the correct number of Pennies
 */
export function convertSpecialCase(a) {
  const { availability } = a;
  const cashValue = SELL_PRICES[a.availability.purchaseQuality.id];
  const purchaseQuality = { id: PENNY_QUALITY_ID };
  const sellPrice = a.availability.sellPrice * cashValue;
  return {
    ...a,
    availability: {
      ...availability,
      purchaseQuality,
      sellPrice,
    },
  };
}

export default (availabilities, exclusions) => availabilities
  .filter(({ availability: { quality: { id } } }) => !exclusions[id])
  .filter(isSpecialCase)
  .map(convertSpecialCase);
