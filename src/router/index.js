import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeLogin from '../views/HomeLogin.vue'
import NavBarLogin from '../components/NavBarLogin.vue'
import NavBar from '../components/NavBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      home: Home,
      nav: NavBarLogin
    }
  },
  {
    path: '/homeLogin',
    components: {
      home: HomeLogin,
      nav: NavBar
    }
  },
  {
    path: '/accountCenter',
    name: 'AccountCenter',
    component: () => import(/* webpackChunkName: "about" */ '../views/AccountCenter.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/forgetPwd',
    name: 'ForgetPwd',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForgetPwd.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
