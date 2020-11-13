import devtools from '@vue/devtools'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

devtools.connect('http://localhost')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
