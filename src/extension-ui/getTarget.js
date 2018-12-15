import { createSelector } from 'reselect';

import getCharacterId from '../auth/getCharacterId';

const getTarget = ({ target }) => target[getCharacterId()];

const inputs = [getTarget];
const output = target => parseInt(target, 10) || 0;

export default createSelector(inputs, output);