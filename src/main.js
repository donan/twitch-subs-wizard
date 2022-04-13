import 'bootstrap/dist/css/bootstrap.css'

import Vue from 'vue'
import { NavbarPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from 'vue-notification'
import VueCryptojs from 'vue-cryptojs'

import globalMixin from '@/mixins/globals'

import App from './App.vue'
import router from './router'


Vue.use(NavbarPlugin)
Vue.use(VueAxios, axios)
Vue.use(Notifications)
Vue.use(VueCryptojs)

Vue.mixin(globalMixin)

Vue.config.productionTip = false

Vue.filter('dateFormat', function(value) {
  const seconds = Number(value);
  const d = Math.floor(seconds / (3600*24));
  const h = Math.floor(seconds % (3600*24) / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  const s = Math.floor(seconds % 60);
  
  const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')