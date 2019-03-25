import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import httpPlugin from '@/utils/http'

Vue.use(ElementUI)

Vue.use(httpPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
