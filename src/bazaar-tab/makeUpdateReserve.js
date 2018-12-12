import { RESERVE_UPDATED } from '../persistence/action-types';

const parseAmount = amount => amount;

export default function makeUpdateReserve({ store, storage }) {
  return (amount) => {
    // TODO: parse the value retrieved and persist it
    store.dispatch({ type: RESERVE_UPDATED, payload: parseAmount(amount) });
  };
}