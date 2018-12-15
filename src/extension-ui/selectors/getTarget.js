import { createSelector } from 'reselect';

const getTarget = ({ target, auth: { characterId } }) => target[characterId];

const inputs = [getTarget];
const output = target => parseFloat(target, 10) || 0;

export default createSelector(inputs, output);