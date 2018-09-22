import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// touch plugin
const VueTouch = require('vue-touch')
Vue.use(VueTouch, { name: 'v-touch' })
