import { combineReducers } from './lib/redux-immutable';
import home from './pages/index/reducer';

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
