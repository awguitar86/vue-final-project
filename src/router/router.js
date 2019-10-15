import Vue from 'vue';
import VueRouter from 'vue-router';
import Firebase from 'firebase';

import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Account from '../components/Account.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
          path: '*', 
          redirect: '/'
        },
        { 
          path: '/', 
          component: Home 
        },
        { 
          path: '/login',
          component: Login 
        },
        { 
          path: '/signup', 
          component: Signup 
        },
        { 
          path: '/account', 
          component: Account, 
          meta: {
            requiresAuth: true
          }
        }
    ]
  });
  
  // router.beforeEach((to, from, next) => {
  //   const currentUser = Firebase.auth().currentUser;
  //   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  //   if(requiresAuth && !currentUser)next('home');
  //   else if (!requiresAuth && currentUser) next('home');
  //   else next();
  // })

  export default router;