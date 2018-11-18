import { LOGGED_IN, LOGGED_OUT } from './action-types';

export const login = () => dispatch => dispatch({ type: LOGGED_IN });
export const logout = () => dispatch => dispatch({ type: LOGGED_OUT });
