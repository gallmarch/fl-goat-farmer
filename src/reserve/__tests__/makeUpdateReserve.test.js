import makeUpdateReserve from '../makeUpdateReserve';
import { RESERVE_UPDATED } from '../action-types';

describe('makeUpdateReserve', () => {
  it('returns a function', () => {
    expect(makeUpdateReserve({})).toBeInstanceOf(Function);
  });
});

describe('updateReserve', () => {
  let dispatch;
  let store;
  let updateReserve;

  beforeEach(() => {
    dispatch = jest.fn();
    store = { dispatch };
    updateReserve = makeUpdateReserve({ store });
  });

  it('dispatches an action', () => {
    const qualityId = 24601;
    const amount = 1000;
    updateReserve({ qualityId, amount });
    expect(dispatch).toHaveBeenCalledWith({
      type: RESERVE_UPDATED,
      payload: { qualityId, amount },
    });
  });

  it('handles valid strings', () => {
    const qualityId = 24601;
    const amount = '26';
    updateReserve({ qualityId, amount });
    expect(dispatch).toHaveBeenCalledWith({
      type: RESERVE_UPDATED,
      payload: { qualityId, amount: 26 },
    });
  });

  it('handles invalid strings', () => {
    const qualityId = 24601;
    const amount = 'frogs';
    updateReserve({ qualityId, amount });
    expect(dispatch).toHaveBeenCalledWith({
      type: RESERVE_UPDATED,
      payload: { qualityId, amount: 0 },
    });
  });

  it('handles undefined amounts', () => {
    const qualityId = 24601;
    updateReserve({ qualityId });
    expect(dispatch).toHaveBeenCalledWith({
      type: RESERVE_UPDATED,
      payload: { qualityId, amount: 0 },
    });
  });
});