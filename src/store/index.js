import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 初始化會有user data、errors
// 登入成功後，會將登陸資料存在本地 localstorage,保持登入
export default new Vuex.Store({
  state: {
    user: null,
    errors: []
  },
  mutations: {
    // 每個Mutation都有一個字串型態的事件類型(type)和一個回調函數(handler)
    // 收到User data
    SET_USER_DATA (state, userData) {
      // 登入==>設置state
      state.user = userData
      console.log('userData:' + userData.name)
      // 設置localstorage連到自動登入
      localStorage.setItem('user', JSON.stringify(userData))
      // 設置每一次axios的header Authorization 為Barrer Token
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    },
    CLEAR_USER_DATA (state) {
      // 登出用==>清除本地端user資料防止loggedIn再讀取到
      localStorage.removeItem('user')
      // reload這個頁面 重置所有vue檔案
      location.reload()
    },
    SET_ERROR_DATA (state, error) {
      // 設置state
      state.errors.push({
        id: state.errors.length,
        content: error
      })
      setTimeout(() => {
        state.errors.reverse()
        state.errors.pop()
        state.errors.reverse()
      }, 2000)
    }
  },
  actions: {
    // 註冊=>credentials為帶入的data
    register ({ commit }, credentials) {
      return axios.post('http://localhost:3000/register', credentials)
    },
    // 登入=>帳號和密碼登入，回傳用then 串起來
    login ({ commit }, credentials) {
      return axios.post('http://localhost:3000/login', credentials)
        .then(
          // 回來資料 commit到 mutations修改state
          ({ data }) => {
            commit('SET_USER_DATA', data)
          }
        )
    },
    pushError ({ commit }, credentials) {
      commit('SET_ERROR_DATA', credentials)
    },
    updateUserInfo ({ commit, state }) {
      return axios.post('http://localhost:3000/register', state.user).then(
        ({ data }) => {
          commit('SET_USER_DATA', data)
        }
      )
    },
    // 登出方法
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  // 創造一個Getter取值
  getters: {
    loggedIn: state => {
    // 判斷是否有user 確定是否為登入狀態
      return !!state.user
    },
    userInfo: state => {
      console.log('state.user:' + state.user)
      return state.user
    }
  }
})
