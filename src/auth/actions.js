import { LOGGED_IN, LOGGED_OUT } from './action-types';

export const login = characterId => dispatch => dispatch({
  type: LOGGED_IN,
  payload: { characterId },
});

export const logout = () => dispatch => dispatch({ type: LOGGED_OUT });
