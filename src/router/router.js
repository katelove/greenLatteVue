import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/auth/Home.vue'
import HomeLogin from '../components/auth/HomeLogin.vue'
import NavBarLogin from '../components/auth/NavBarLogin.vue'
import NavBar from '../components/auth/NavBar.vue'
import Login from '../components/auth/Login.vue'
import AccountCenter from '../components/auth/AccountCenter.vue'
import ForgetPwd from '../components/auth/ForgetPwd.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        home: HomeLogin,
        nav: NavBarLogin
      }
    },
    // chk每位是否有登入
    // { path: '*', redirect: '/login' },
    {
      path: '/login',
      name: 'Login',
      components: {
        home: Login,
        nav: NavBarLogin
      }
    },
    {
      path: '/home',
      name: 'Home',
      components: {
        home: Home,
        nav: NavBar
      }
    },
    {
    // 登入後註冊
      path: '/loginRegister',
      name: 'AccountCenter',
      components: {
        home: AccountCenter,
        nav: NavBar
      }
    },
    {
      // 未登入註冊
      path: '/register',
      name: 'AccountCenter',
      components: {
        home: AccountCenter,
        nav: NavBarLogin
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
  const isLogin = localStorage.getItem('user')
  if (isLogin) {
    next()
    if (to.path === '/home') {
      alert('歡迎來到健康綠生活 :)')
    }
  } else {
    if (to.path !== '/login' &&
        to.path !== '/' &&
        to.path !== '/loginRegister' &&
        to.path !== '/register' &&
        to.path !== '/forgetPwd') {
      next('/login')
    } else {
      next()
    }
  }
})
