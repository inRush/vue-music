/*
 * @Author: hwj
 * @Date: 2017-06-15 22:31:42
 * @Last Modified by: hwj
 * @Last Modified time: 2017-06-17 21:38:58
 */
import 'babel-polyfill';
import Vue from 'vue';
import fastclick from 'fastclick';
import 'common/scss/index.scss';
import App from './App';
import router from './router';

fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
