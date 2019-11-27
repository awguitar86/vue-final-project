import Firebase from 'firebase';
import { config } from './firebaseConfig';
Firebase.initializeApp(config)
import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import App from './App.vue'
import { store } from './store';
import { routes } from './routes';

Firebase.analytics();

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
Vue.http.interceptors.push((req, next) => {
  console.log(req);
  if(req.method == "POST"){
    req.method = "PUT";
  }
  next(res => {
    res.json = () => {
      return {messages: res.body}
    }
  });
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
