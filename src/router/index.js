import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Home from '@/pages/home'
import Commend from '@/pages/commend'
import Menu from '@/pages/menu'
import Orderlist from '@/pages/orderList'
import User from '@/pages/user'
import Confirm from '@/pages/confirm'
import Orderdetail from '@/pages/orderDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/commend',
          name: 'Commend',
          component: Commend
        },
        {
          path: '/menu',
          name: 'Menu',
          component: Menu
        },
        {
          path: '/user',
          name: 'User',
          component: User
        }
      ]
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/orderList',
      name: 'Orderlist',
      component: Orderlist
    },
    {
      path: '/orderDetail',
      name: 'Orderdetail',
      component: Orderdetail
    }
  ]
});
