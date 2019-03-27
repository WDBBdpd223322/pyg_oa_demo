import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import ElementUI from 'element-ui'
import Breadcrumb from '@/components/Custom/Breadcrumb'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'

Vue.use(ElementUI)

Vue.component('Breadcrumb', Breadcrumb)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
