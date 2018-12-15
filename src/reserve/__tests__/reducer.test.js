import { RESERVE_UPDATED } from '../action-types';
import reducer, { INITIAL_STATE } from '../reducer';

const mockCharacterId = 65536;
jest.mock('../../auth/getCharacterId', () => () => mockCharacterId);

describe('reserve/reducer', () => {
  it('has the expected initial state', () => {
    expect(reducer()).toEqual(INITIAL_STATE);
  });

  it('updates the correct character\'s reserve', () => {
    const qualityId = 600;
    const amount = 250;
    const action = { type: RESERVE_UPDATED, payload: { amount, qualityId } };
    expect(reducer({}, action)).toEqual({
      [mockCharacterId]: { [qualityId]: amount },
    });
  });
});