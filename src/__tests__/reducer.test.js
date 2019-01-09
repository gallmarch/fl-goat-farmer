import reducer from '../reducer';

describe('root reducer', () => {
  it('has the expected initial state', () => {
    const state = reducer();
    expect(state.auth).toBeDefined();
    expect(state.exchange).toBeDefined();
    expect(state.myself).toBeDefined();
    expect(state.exclusions).toBeDefined();
    expect(state.reserve).toBeDefined();
    expect(state.target).toBeDefined();
  });
});