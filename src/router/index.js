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
            path: 'slideLoad',
            component: function (resolve) {
              require(['../views/know/pages/slideLoad'], resolve)
            }
          }
        ],
      },
      {
        path: '/music',
        component: function (resolve) {
          require(['../views/know/music/music'], resolve)
        },
      },
      {
        path: '/fmmusic',
        component: function (resolve) {
          require(['../views/know/music/fmMusic'], resolve)
        }
      },
      {
        path: '/arrow',
        component: function (resolve) {
          require(['../views/know/next/arrow'], resolve)
        }
      }
    ],

  }
]

export default new Router({
  routes: constantRouterMap
})
