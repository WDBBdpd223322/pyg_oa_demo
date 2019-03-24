import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
