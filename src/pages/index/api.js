import request from '../../utils/request';
import regeneratorRuntime from '../../lib/regenerator-runtime/runtime-module';

const showMoviesApi = async () => {
  try {
    const res = await request({
      url: 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json',
      method: 'GET',
    });
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export { showMoviesApi };
