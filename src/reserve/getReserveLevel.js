import createCachedSelector from 're-reselect';

import getCharacterId from '../auth/getCharacterId';

const getQualityId = (state, { qualityId }) => qualityId;
const getReserve = ({ reserve }) => reserve[getCharacterId()] || {};
const cacheKey = getQualityId;

const inputs = [getQualityId, getReserve];
const output = (qualityId, reserve) => parseInt(reserve[qualityId], 10) || 0;

export default createCachedSelector(inputs, output)(cacheKey);