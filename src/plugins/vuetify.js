/*
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-12-29 10:31:57
 * @LastEditors: slimmerYu
 * @LastEditTime: 2021-01-01 18:44:54
 */
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  theme: {
    themes: {
      light: {
        primary: '#9652ff',
        success: '#3cd1c2',
        info: '#ffaa2c',
        error: '#f83e70' 
      }
    }
  }
});
