// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import axios from 'axios'
import './mock'
import 'vue2-animate/dist/vue2-animate.min.css'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(VueRouter)

Vue.prototype.Axios = axios;
Vue.prototype.goTo = function(address){
    this.$router.push(address);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
