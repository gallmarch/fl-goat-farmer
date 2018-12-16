import { TARGET_UPDATED } from '../action-types';
import { PROMPT_TEXT, updateTarget } from '../updateTarget';

const mockCharacterId = 65536;
jest.mock('../../auth/getCharacterId', () => () => mockCharacterId);

describe('updateTarget', () => {
  let dispatch;
  let getState;
  let prompt;
  let window;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn(() => ({ target: {} }));
    prompt = jest.fn();
    window = { prompt };
  });

  it('prompts the user', () => {
    updateTarget(window)(dispatch, getState);
    expect(prompt).toHaveBeenCalled();
  });

  it('pre-fills with the stored target', () => {
    const expected = 256;
    getState = jest.fn(() => ({ target: { [mockCharacterId]: 256 } }));
    updateTarget(window)(dispatch, getState);
    expect(prompt).toHaveBeenCalledWith(PROMPT_TEXT, expected);
  });

  it('defaults to 0 within the prompt', () => {
    const expected = 0;
    updateTarget(window)(dispatch, getState);
    expect(prompt).toHaveBeenCalledWith(PROMPT_TEXT, expected);
  });

  it('dispatches an action', () => {
    const target = 2566;
    window = { prompt: jest.fn(() => target) };
    updateTarget(window)(dispatch, getState);
    const expected = { type: TARGET_UPDATED, payload: target };
    expect(dispatch).toHaveBeenCalledWith(expected);
  });
});