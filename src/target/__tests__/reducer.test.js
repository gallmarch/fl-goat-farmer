import reducer, { INITIAL_STATE } from '../reducer';
import { TARGET_UPDATED } from '../action-types';

const mockCharacterId = 65536;
jest.mock('../../auth/getCharacterId', () => () => mockCharacterId);

describe('target/reducer', () => {
  it('has the expected initial state', () => {
    expect(reducer()).toEqual(INITIAL_STATE);
  });

  it('updates the correct character\'s reserve', () => {
    const target = 24601.01;
    const action = { type: TARGET_UPDATED, payload: target };
    expect(reducer({}, action)).toEqual({
      [mockCharacterId]: target,
    });
  });
});