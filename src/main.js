import Vue from 'vue'
import VueResource from 'vue-resource';
import vuetify from './plugins/vuetify';
import App from './App.vue'
import store from './store/store';
import router from './router/router';

import Firebase from 'firebase';
import {config} from './firebase.config';

Vue.config.productionTip = false;
Vue.use(VueResource);

Vue.http.options.root = config.databaseURL;

Firebase.initializeApp(config);
Firebase.analytics();

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
