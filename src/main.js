import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as GmapVue from 'gmap-vue'
import VueMeta from 'vue-meta'

Vue.use(GmapVue, {
  load: {
    key: process.env.VUE_APP_GOOGLE_API_KEY,
    libraries: 'places'
  },
  installComponents: true
})
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
