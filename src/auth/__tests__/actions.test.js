import { LOGGED_IN, LOGGED_OUT } from '../action-types';
import { login, logout } from '../actions';

describe('login', () => {
  it('dispatches an action', () => {
    const characterId = 65536;
    const dispatch = jest.fn();
    login(characterId)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: LOGGED_IN, payload: { characterId } });
  });
});

describe('logout', () => {
  it('dispatches an action', () => {
    const dispatch = jest.fn();
    logout()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: LOGGED_OUT });
  });
});