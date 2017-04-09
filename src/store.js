import { fromJS } from './lib/immutable';
import { createStore, applyMiddleware, compose } from './lib/redux';
import thunk from './lib/redux-thunk';
import rootReducer from './reducers';

const configureStore = (initialState = {}) => {
  const middleware = compose(
    applyMiddleware(thunk)
  );

  const store = createStore(rootReducer, fromJS(initialState), middleware);
  return store;
};

export default configureStore;
