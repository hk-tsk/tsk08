import Vue from 'vue';
import Vuex from 'vuex';
import userStore from './modules/userStore'

Vue.use(Vuex);

// const myPlugin = store => {
//   // called when the store is initialized
//   store.subscribe((mutation, state) => {
//     // called after every mutation.
//     // The mutation comes in the format of `{ type, payload }`.
//   })
// }

const store = new Vuex.Store({
    modules: {
      user:userStore,
    }
    //plugins: [myPlugin]
  })

export default store;