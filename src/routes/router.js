import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Main from '@/views/Layout/main'
import Users from '@/components/Users/index.vue'
import Roles from '@/components/Roles/index.vue'
import Rights from '@/components/Rights/index.vue'
import Goods from '@/components/Goods/index.vue'
import Params from '@/components/Params/index.vue'
import Categories from '@/components/Categories/index.vue'
import Orders from '@/components/Orders/index.vue'
import Reports from '@/components/Reports/index.vue'
import { getToken } from '@/utils/auth.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'main',
          component: Main
        },
        {
          path: '/users',
          name: 'users',
          component: Users
        },
        {
          path: '/roles',
          name: 'roles',
          component: Roles
        },
        {
          path: '/rights',
          name: 'rights',
          component: Rights
        },
        {
          path: '/goods',
          name: 'goods',
          component: Goods
        },
        {
          path: '/params',
          name: 'params',
          component: Params
        },
        {
          path: '/categories',
          name: 'categories',
          component: Categories
        },
        {
          path: '/orders',
          name: 'orders',
          component: Orders
        },
        {
          path: '/reports',
          name: 'reports',
          component: Reports
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  if (!getToken()) return router.push(`/login?redirect=${to.path}`)
  next()
})

export default router
