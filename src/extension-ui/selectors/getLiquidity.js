import { createSelector } from 'reselect';

import getCharacterId from '../../auth/getCharacterId';
import { PENNY_QUALITY_ID } from '../constants';
import getStuffThatSellsForPennies from './getStuffThatSellsForPennies';

const getAvailabilities = ({ exchange: { availabilities } }) => availabilities;
const getExclusions = ({ exclusions, auth: { characterId } }) => exclusions[characterId] || {};
const getQualities = ({ myself: { qualities } }) => qualities;
const getReserve = ({ reserve, auth: { characterId } }) => reserve[characterId] || {};

const inputs = [getAvailabilities, getExclusions, getQualities, getReserve];

const output = (availabilities, exclusions, qualities, reserve) => {
  // Get the actual number of Pennies that the user owns
  const pennies = (qualities.find(q => q.id === PENNY_QUALITY_ID) || { level: 0 }).level;

  // Get stuff that sells for Pennies (e.g., not Memories of Light) that isn't excluded
  const stuffThatSellsForPennies = getStuffThatSellsForPennies(availabilities, exclusions);

  // Tot up its value
  const reduceFn = makeReducer(qualities, reserve);
  const valueOfSellableStuff = stuffThatSellsForPennies.reduce(reduceFn, 0);

  // Return the sum
  return valueOfSellableStuff + pennies;
};

function makeReducer(qualities, reserve) {
  return function reduceFn(acc, next) {
    // Get the sell price and quality ID for this availability
    const { availability: { sellPrice, quality: { id } } } = next;
    const quality = qualities.find(q => q.id === id);
    // If something has gone wrong here, just return gracefully
    if (!quality) {
      return acc;
    }
    // Get the number of this item in our possession
    const { level } = quality;
    // Get the number we've reserved
    const reserveLevel = reserve[id] || 0;
    // Return the running total plus the value of whatever isn't reserved
    return acc + (sellPrice * Math.max(0, level - reserveLevel));
  };
}

export default createSelector(inputs, output);
