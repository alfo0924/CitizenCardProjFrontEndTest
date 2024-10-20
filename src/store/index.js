import { createStore } from 'vuex'

export default createStore({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        login({ commit }, user) {
            // 實現登入邏輯
            commit('setUser', user)
        },
        logout({ commit }) {
            // 實現登出邏輯
            commit('setUser', null)
        }
    },
    getters: {
        isLoggedIn: state => !!state.user
    }
})