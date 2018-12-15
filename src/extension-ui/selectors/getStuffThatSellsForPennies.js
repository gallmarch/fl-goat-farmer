import { PENNY_QUALITY_ID } from '../constants';

export default (availabilities, exclusions) => availabilities
  .filter(({ availability: { quality: { id } } }) => !exclusions[id])
  .filter(({ availability: { purchaseQuality: { id } } }) => id === PENNY_QUALITY_ID);
