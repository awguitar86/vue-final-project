<template>
  <v-app class="d-flex flex-colunm align-center">
    <v-app-bar app>
      <router-link to="/">
        <v-img src='./assets/IC_logo.jpg' class="icon-logo" max-width="100" max-height="50">
      </v-img></router-link>
      <v-spacer></v-spacer>
      <nav class="nav-sm">
        <v-btn id="ham-menu" icon>
          <router-link to='/menu'>
            <v-icon size="28" color="blue-grey darken-3">mdi-menu</v-icon>
          </router-link>
        </v-btn>
      </nav>

      <nav class="nav-lg">
        <v-btn text><router-link style="text-decoration:none; color:black;" to='/'>Home</router-link></v-btn>
        <v-btn text><router-link style="text-decoration:none; color:black;" to='/about'>About</router-link></v-btn>
        <v-btn text><router-link style="text-decoration:none; color:black;" to='/contact'>Contact</router-link></v-btn>
        <v-btn text v-if="!user"><router-link style="text-decoration:none; color:black;" to='/login'>Login / Sign Up</router-link></v-btn>
        <v-btn text v-if="user"><router-link style="text-decoration:none; color:black;" to='/plan'>Plan Event</router-link></v-btn>
        <v-btn text v-if="user"><router-link style="text-decoration:none; color:black;" to='/account' v-if="user">Account</router-link></v-btn>
        <v-btn text @click="logout" v-if="user">Logout</v-btn>
      </nav>
      
    </v-app-bar>

    <v-content>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </v-content>
    <v-snackbar v-model="snackbar" color="success" right>{{ snackbarText }}</v-snackbar>
  </v-app>
</template>

<script>
  import Firebase from 'firebase';

  export default {
    name: 'App',
    data() {
      return {
        snackbar: false,
        snackbarText: 'Successfully Logged Out',
      }
    },
    computed: {
      user() {
        if(this.$store.getters.getUser) {
          this.snackbar = true;
          this.snackbarText = 'Successfully Logged In!';
          return true;
        } else {
          return false
        }
      }
    },
    methods: {
      logout() {
        Firebase.auth().signOut()
        .then(() => {
          this.$router.replace('/');
          this.$store.dispatch('deleteUser');
          this.snackbarText = 'Successfully Logged Out.'
          this.snackbar = true;
        })
        .catch(err => {throw err});
      }
    }
  };
</script>

<style scoped lang="scss">
    body {
        padding: 30px;
    }
    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }
    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }
    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes slide-out{
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
    .nav-sm {
      display: flex;
      align-items: center;
      justify-content: center;
      #ham-menu {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .nav-lg {
      display: none;
    }

    // For medium screens
    @media only screen and (min-width: 48rem) {
      .nav-lg {
        display: initial;
      }
      .nav-sm {
        display: none;
      }
    }

    // For large screens
    @media only screen and (min-width: 75rem) {

    }
</style>
