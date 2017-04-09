import { createSelector } from '../../lib/reselect';

const selectHome = state => state.get('home');

const selectMoviesTotal = createSelector(
  selectHome,
  homeState => homeState.get('moviesTotal')
);

export { selectHome, selectMoviesTotal };
