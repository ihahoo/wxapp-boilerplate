import request from '../../utils/request';
import regeneratorRuntime from '../../lib/regenerator-runtime/runtime';

const showMoviesApi = async () => {
  try {
    const res = await request({
      url: 'https://raw.githubusercontent.com/ihahoo/doc/master/MoviesExample.json',
      method: 'GET',
    });
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export { showMoviesApi };
