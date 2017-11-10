import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Classify from '@/views/Classify'
import Shop from '@/views/Shop'
import My from '@/views/My'
import Search from '@/views/Search'
import Details from '@/views/Details'
import Login from '@/views/Login'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      query: {
        loginDoCallback: ''
      }
    },
    {
      path: '/search/:searchVal',
      name: 'Search',
      component: Search
    },
    {
      path: '/details/:img/:text/:money',
      name: 'Details',
      component: Details
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (window.localStorage.getItem('userInfo')) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          loginDoCallback: to.path
        }
      })
    }
  } else {
    next()
  }
})
export default router
