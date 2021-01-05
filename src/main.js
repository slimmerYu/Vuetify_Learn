/*
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-12-29 10:28:46
 * @LastEditors: slimmerYu
 * @LastEditTime: 2021-01-01 19:02:13
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
