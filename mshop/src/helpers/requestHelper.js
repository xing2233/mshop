import axios from 'axios'

export default {

  request: function (setting = {}) {
    const defaultSet = {
      url: '',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'GET',
      responseType: 'JSON',
      data: {}
    };

    const set = Object.assign(defaultSet, setting);
    let params = set.data;

    // mock
    // if (Config.query.mock) {
    //   if (set.mock) {
    //     const mock = import('../mocks/' + set.mock + '.js');
    //     return mock.then((response) => {
    //       return new Promise((resolve, reject) => {
    //         resolve(response.default[set.url]);
    //       });
    //     });
    //   }
    // }

    const method = set.method.toUpperCase();

    switch (method) {
      case 'GET':
        return axios({
          url: set.url,
          method: method,
          params: params,
          responseType: 'json',
        });
      case 'POST':
        switch (set.header['Content-Type']) {
          case 'application/x-www-form-urlencoded':
            // 对 data 进行任意转换处理
            let b = '';
            for (let k in params) {
              b += k + '=' + params[k] + '&';
            }
            params = b.substr(0, b.length - 1);
            break;

          case 'application/json':
            params = JSON.stringify(params);
            break;

          case 'multipart/form-data':

            break;
        }
        return axios({
          url: set.url,
          method: method,
          data: params,
          headers: set.header,
          responseType: set.responseType,
        });

    }
  }
}

