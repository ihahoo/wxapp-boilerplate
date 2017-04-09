import { createAction, createActionAsync } from '../../lib/redux-act-reducer/index';
import { showMoviesApi } from './api';

const prefix = 'HOME';

export const SHOW_HELLO = `${prefix}_SHOW_HELLO`;
export const SHOW_MOVIES_ASYNC = `${prefix}_SHOW_MOVIES_ASYNC`;

export const showHello = createAction(SHOW_HELLO, 'info');
export const showMoviesAsync = createActionAsync(SHOW_MOVIES_ASYNC, showMoviesApi);
