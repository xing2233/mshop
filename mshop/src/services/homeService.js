import requestHelper from '@/helpers/requestHelper.js'
import config from '@/config/global.config.js'


export default {
  getBanner: function () {
    return requestHelper.request({
      url: config.api.url + 'get_banner'
    })
  }
}



