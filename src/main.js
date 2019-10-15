// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import axios from 'axios'
import $ from 'jquery'
import 'iview/dist/styles/iview.css';

import VueParticles from 'vue-particles'  
Vue.use(VueParticles)  

Vue.config.productionTip = false
Vue.use(iView);
Vue.prototype.$axios=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
