import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/auth/Home.vue'
import HomeLogin from '../components/auth/HomeLogin.vue'
import NavBarLogin from '../components/auth/NavBarLogin.vue'
import NavBar from '../components/auth/NavBar.vue'
import Login from '../components/auth/Login.vue'
import AccountCenter from '../components/auth/AccountCenter.vue'
import ForgetPwd from '../components/auth/ForgetPwd.vue'
// import Cookies from 'js-cookie'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'Home',
      components: {
        home: Home,
        nav: NavBar
      }
    // meta: { requiresAuth: true }// 需驗證
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        home: Login,
        nav: NavBarLogin
      }
    },
    // chk每位是否有登入
    { path: '/*', redirect: '/login' },
    {
      path: '/',
      name: 'index',
      components: {
        home: HomeLogin,
        nav: NavBarLogin
      }
    // meta: { requiresAuth: false }// 不需驗證
    },
    {
    // 註冊
      path: '/register',
      name: 'AccountCenter',
      components: {
        home: AccountCenter,
        nav: NavBar
      }
    },
    {
      path: '/forgetPwd',
      name: 'ForgetPwd',
      components: {
        home: ForgetPwd,
        nav: NavBarLogin
      }
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    return next('/login')
  }

  next()
})
