
export default {
    state: {
        authorized: false,
        userName: "",
        name: ""
    },
    mutations: {
        setUserInfo(state, payload) {
            state.authorized = payload.authorized;
            state.userName = payload.username;
        }
    },
    getters: {
        isAuthorized: (state) => state.authorized,
        getUserName: (state) => state.userName,

    },
    actions: {
        doAuthorized({ commit }, payload) {//{ state, commit, rootState }
            commit('setUserInfo', { username: payload.username, authorized: true })
        }
    }
}
