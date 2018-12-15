import { RESERVE_UPDATED } from './action-types';

const parseAmount = amount => parseInt(amount, 10) || 0;

export default function makeUpdateReserve({ store }) {
  return ({ amount, qualityId }) => {
    store.dispatch({
      type: RESERVE_UPDATED,
      payload: { qualityId, amount: parseAmount(amount) },
    });
  };
}