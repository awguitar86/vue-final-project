import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import App from './App.vue'
import store from './store/store';
import { routes } from './routes';

import Firebase from 'firebase';
import {config} from './firebase.config';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth && !currentUser) {
    next('/login');
  } else if ( requiresAuth && currentUser){
    next();
  } else {
    next();
  }
});

Vue.http.options.root = config.databaseURL;

Firebase.initializeApp(config);
Firebase.analytics();

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
