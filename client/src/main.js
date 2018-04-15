// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'

import App from './App'
import router from './router'

// eslint-disable-next-line no-unused-vars
import styleVuetify from '../node_modules/vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(styleVuetify)
Vue.use(VueResource)
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
