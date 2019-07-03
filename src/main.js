// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {routes} from './router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

window.$ = window.jQuery = require('jquery');
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vuex from 'vuex'

Vue.use(Vuex)
import {stroge} from './store/index'
const store = new Vuex.Store(stroge)
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
