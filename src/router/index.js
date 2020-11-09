import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/home'),
      children:[
        {
          path: '/dashboard',
          name: 'dashboard',
          component: ()=>import('../views/dashboard/index'),
        },
        {
          path: '/permissionsindex',
          name: 'permissionsindex',
          component: ()=>import('../views/permissions/index'),
        },
        {
          path: '/log',
          name: 'log',
          component: ()=>import('../views/log/index'),
        },
        {
          path: '/statisticalindex',
          name: 'statisticalindex',
          component: ()=>import('../views/statistical/index'),
        },
      ]
    },
  ]
})
