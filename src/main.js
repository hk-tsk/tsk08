import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import store from './store';
import routes from './route'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

// router.beforeEach((to, from, next) => {
//   // ...
// })
// router.afterEach((to, from) => {
//   // ...
// })

//import { currency } from './currency'
//Vue.filter('currency', currency)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});