// import { EXCLUSIONS_FETCHED } from '../persistence/action-types';
import { RESERVE_UPDATED } from './action-types';

const parseAmount = amount => amount;

export default function makeUpdateReserve({ store }) {
  return ({ amount, qualityId }) => {
    store.dispatch({ type: RESERVE_UPDATED, payload: { qualityId, amount: parseAmount(amount) } });
  };
}