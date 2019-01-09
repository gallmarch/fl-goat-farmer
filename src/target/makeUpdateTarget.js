import { TARGET_UPDATED } from './action-types';

export default function makeUpdateTarget({ store }) {
  return (target) => {
    store.dispatch({ type: TARGET_UPDATED, payload: target });
  };
}
