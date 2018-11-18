import { createSelector } from 'reselect';

const getAvailabilities = ({ exchange: { availabilities } }) => availabilities;
const getExclusions = ({ persistence: { exclusions } }) => exclusions;
const getQualities = ({ myself: { qualities } }) => qualities;

const PENNY_QUALITY_ID = 22390;

const inputs = [getAvailabilities, getExclusions, getQualities];
const output = (availabilities, exclusions, qualities) => {
  // Get the actual number of Pennies
  const pennies = (qualities.find(q => q.id === PENNY_QUALITY_ID) || { level: 0 }).level;
  // Get stuff that sells for Pennies (e.g., not Memories of Light) that isn't excluded
  const stuffThatSellsForPennies = availabilities
    .filter(({ availability: { quality: { id } } }) => !exclusions[id])
    .filter(({ availability: { purchaseQuality: { id } } }) => id === PENNY_QUALITY_ID);

  // Tot up its value
  const valueOfSellableStuff = stuffThatSellsForPennies.reduce(reduceFn, 0);

  // Return the sum
  return valueOfSellableStuff + pennies;

  function reduceFn(acc, next) {
    const { availability: { sellPrice, quality: { id } } } = next;
    const quality = qualities.find(q => q.id === id);
    if (!quality) {
      return acc;
    }
    const { level } = quality;
    return acc + (sellPrice * level);
  }
};

export default createSelector(inputs, output);
