import reducer, { INITIAL_STATE, toggleExclusion } from '../reducer';

const mockCharacterId = 65536;
jest.mock('../../auth/getCharacterId', () => () => mockCharacterId);

describe('exclusions/reducer', () => {
  it('has the expected initial state', () => {
    expect(reducer()).toEqual(INITIAL_STATE);
  });
});

describe('toggleExclusion', () => {
  it('excludes an item that was not previously excluded', () => {
    const qualityId = 200;
    const state = { [mockCharacterId]: { 100: true } };
    const payload = qualityId;
    expect(toggleExclusion(state, payload))
      .toEqual({ [mockCharacterId]: { 100: true, 200: true } });
  });

  it('removes an item that was excluded', () => {
    const qualityId = 200;
    const state = { [mockCharacterId]: { 100: true, 200: true } };
    const payload = qualityId;
    expect(toggleExclusion(state, payload))
      .toEqual({ [mockCharacterId]: { 100: true } });
  });
});