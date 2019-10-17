import Home from './components/Home.vue';
import Plan from './components/Plan.vue';
import Contact from './components/Contact.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Account from './components/Account.vue';
import Err404 from './components/404.vue';


export const routes = [
    { 
      path: '/', 
      component: Home,
      meta: {
        requiresAuth: false
      } 
    },
    { 
      path: '/plan', 
      component: Plan,
      meta: {
        requiresAuth: false
      } 
    },
    { 
      path: '/contact', 
      component: Contact,
      meta: {
        requiresAuth: false
      } 
    },
    { 
      path: '/login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    { 
      path: '/signup', 
      component: Signup,
      meta: {
        requiresAuth: false
      }
    },
    { 
      path: '/account',
      name: 'account',
      component: Account, 
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/404',
      component: Err404,
      meta: {
        requiresAuth: false
      }

    }
];