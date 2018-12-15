import createCachedSelector from 're-reselect';

const getQualityId = (state, { qualityId }) => qualityId;
const getReserve = ({ reserve, auth: { characterId } }) => reserve[characterId] || {};
const cacheKey = getQualityId;

const inputs = [getQualityId, getReserve];
const output = (qualityId, reserve) => parseInt(reserve[qualityId], 10) || 0;

export default createCachedSelector(inputs, output)(cacheKey);