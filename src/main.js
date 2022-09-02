import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入全部的请求函数
import * as API from '@/api';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
