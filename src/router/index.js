import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Data from '../views/Data.vue'
import Detail from '../views/Detail.vue'
import New from '../views/New.vue'
import Rumors from '../views/Rumors.vue'
import Column from '../views/Column.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        redirect: 'home'
      },
      {
        path: 'home',
        component: () => import('../views/Home.vue')
      }
    ]
  },
  {
    path: '/data',
    component: () => import('../views/Data.vue'),
    children: [
      // 直接定向到推荐,默认显示
      { path: '/', redirect: 'detail' },
      {
        path: 'detail',
        component: () => import('../views/Detail.vue')
      },
      {
        path: 'new',
        component: () => import('../views/New.vue')
      },
      {
        path: 'rumors',
        component: () => import('../views/Rumors.vue')
      },
      {
        path: 'column',
        component: () => import('../views/Column.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
