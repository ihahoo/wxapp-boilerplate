import { fromJS } from '../../lib/immutable';
import { createReducer } from '../../lib/redux-act-reducer/index';
import { SHOW_HELLO, SHOW_MOVIES_ASYNC } from './actions';

const defaultState = fromJS({
  info: 'hello',
  isFetching: false,
  error: undefined,
  moviesTotal: 0
});

export default createReducer({
  [SHOW_HELLO](state, action) {
    return state.set('info', action.info);
  },
  [SHOW_MOVIES_ASYNC](state, action) {
    return {
      'REQUEST'() {
        return state.merge({
          isFetching: true,
          error: undefined
        });
      },
      'SUCCESS'() {
        return state.merge({
          isFetching: false,
          error: undefined,
          moviesTotal: action.res.body.total
        });
      },
      'FAILURE'() {
        return state.merge({
          isFetching: false,
          error: action.err.errmsg
        });
      }
    };
  },
}, defaultState);
