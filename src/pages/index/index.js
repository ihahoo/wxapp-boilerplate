import { showHello, showMoviesAsync } from './actions';
import { connect } from '../../lib/wx-app-redux/index';
import { selectHome, selectMoviesTotal } from './selectors';

const page = {
  data: {
    motto: '请关闭开发者工具“ES6转ES5”'
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../about/about'
    });
  },
  onLoad() {
    const { dispatch } = this;
    dispatch(showHello('Hello World'));
    dispatch(showMoviesAsync());
  }
};

const mapState = state => ({
  home: selectHome(state),
  moviesTotal: selectMoviesTotal(state)
});

Page(connect(mapState)(page));
