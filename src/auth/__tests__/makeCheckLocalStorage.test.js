import jwt from 'jsonwebtoken';

import { LOGGED_IN, LOGGED_OUT } from '../action-types';
import makeCheckLocalStorage from '../makeCheckLocalStorage';

describe('makeCheckLocalStorage', () => {
  it('returns a function', () => {
    expect(makeCheckLocalStorage({})).toBeInstanceOf(Function);
  });
});

describe('checkLocalStorage', () => {
  let axios;
  let dispatch;
  let checkLocalStorage;
  let store;

  beforeEach(() => {
    axios = { defaults: { headers: { common: {} } } };
    dispatch = jest.fn();
    store = { dispatch };
    checkLocalStorage = makeCheckLocalStorage({ axios, store });
    window.localStorage.clear();
    window.sessionStorage.clear();
  });

  it('finds the token in localStorage', () => {
    const token = 'be-sure-to-drink-your-ovaltine';
    window.localStorage.setItem('access_token', token);
    checkLocalStorage({ axios, store });
    expect(axios.defaults.headers.common.Authorization).toBe(`Bearer ${token}`);
  });

  it('finds the token in localStorage', () => {
    const token = 'be-sure-to-drink-your-ovaltine';
    window.sessionStorage.setItem('access_token', token);
    checkLocalStorage({ axios, store });
    expect(axios.defaults.headers.common.Authorization).toBe(`Bearer ${token}`);
  });

  it('dispatches a login action if it finds a token', () => {
    const characterId = 65536;
    const token = jwt.sign({ CharacterId: characterId }, 'be-sure-to-drink-your-ovaltine');
    window.localStorage.setItem('access_token', token);
    checkLocalStorage({ axios, store });
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: LOGGED_IN }));
  });

  it('dispatches a logout action if it finds no token', () => {
    checkLocalStorage({ axios, store });
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: LOGGED_OUT }));
  });
});