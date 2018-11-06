import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRouterMap = [
  {
    path: '/know',
    component: function (resolve) {
      require(['../views/home'], resolve)
    },
    children: [ 
      {
          path: '/know',
          component: function (resolve) {
            require(['../views/know/pages/sidebar'], resolve)
          },
          children: [
          {
            path: '/',
            component: function (resolve) {
              require(['../views/know/pages/page'], resolve)
            }
          },
          {
            path: 'slide',
            component: function (resolve) {
              require(['../views/know/pages/slide'], resolve)
            }
          }
          ]
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})
