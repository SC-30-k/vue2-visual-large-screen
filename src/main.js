import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局样式
import './assets/css/global.scss'
import datav from '@jiaminghi/data-view'
// 引入echarts配置全局
import * as echarts from "echarts";
import 'echarts-liquidfill/dist/echarts-liquidfill.min.js'
Vue.use(datav)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
