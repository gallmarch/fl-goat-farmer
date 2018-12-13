import { createSelector } from 'reselect';

const getTarget = ({ persistence: { target } }) => target;

const inputs = [getTarget];
const output = target => parseInt(target, 10) || 0;

export default createSelector(inputs, output);