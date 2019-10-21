import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Plan from './components/Plan.vue';
import Account from './components/Account.vue';
import Err404 from './components/404.vue';

export const routes = [
    {
      path: '/',
      redirect: '/home',
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/about',
      component: About,
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
      path: '/plan',
      component: Plan,
      meta: {
        requiresAuth: true
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