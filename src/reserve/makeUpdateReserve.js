import { RESERVE_UPDATED } from './action-types';

const parseAmount = amount => parseInt(amount, 10) || 0;
const clamp = amount => Math.max(0, amount);

export default function makeUpdateReserve({ store }) {
  return ({ amount, qualityId }) => {
    store.dispatch({
      type: RESERVE_UPDATED,
      payload: { qualityId, amount: clamp(parseAmount(amount)) },
    });
  };
}