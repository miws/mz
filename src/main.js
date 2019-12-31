import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import global_ from './global'
Vue.prototype.GLOBAL = global_


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
