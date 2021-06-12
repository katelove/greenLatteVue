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

const routes = [
  {
    path: '/accountHome',
    name: 'Home',
    components: {
      home: Home,
      nav: NavBar
    },
    meta: { requiresAuth: true }// 需驗證
  },
  {
    path: '/',
    name: 'index',
    components: {
      home: HomeLogin,
      nav: NavBarLogin
    },
    meta: { requiresAuth: false }// 不需驗證
  },
  // { path: '/*', redirect: '/login' },
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
    path: '/login',
    name: 'Login',
    components: {
      home: Login,
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// router login導頁，使用全域beforeEach
// router.beforeEach((to, from, next) => {
//   console.log('to: ' + to.fullPath)
//   console.log('from: ' + from.fullPath)
//   // 1) chk 目的地路由在 meta上是否有設置requiresAuth: true，如果沒有，導回login
//   console.log('是否有驗證: ' + to.meta.requiresAuth)
//   if (to.meta.requiresAuth) {
//     // 2) 獲取cookies當中 login資訊並取得 token
//     const coLogin = Cookies.get('login')
//     const cotoken = JSON.stringify(coLogin).token
//     console.log('login token:' + cotoken)
//     if (coLogin) {
//       // 3) chk token不為空,否則導回login
//       if (cotoken.length > 0) {
//         next()
//       } else {
//         // 導回login
//         next({
//           path: '/login'
//         })
//       }
//     } else {
//       next({
//         path: '/login'
//       })
//     }
//   } else {
//     next()
//   }
// })
