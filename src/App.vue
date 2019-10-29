<template>
  <v-app class="d-flex flex-colunm align-center">
    <div id="header" style="z-index:1020;">
      <router-link to="/home" class="d-flex align-center justify-center">
        <img src='./assets/ICKnifeLogo.svg' alt="logo" id="icon-logo"/>
      </router-link>
      <v-spacer></v-spacer>
      <nav class="nav-sm">
        <v-btn id="ham-menu" v-if="!isMenuOpen" icon @click="menuToggle">
            <v-icon size="28" color="blue-grey darken-3">mdi-menu</v-icon>
        </v-btn>
        <v-btn id="ham-menu" v-if="isMenuOpen" icon @click="menuToggle">
            <v-icon size="28" color="blue-grey darken-3">mdi-close</v-icon>
        </v-btn>
      </nav>

      <nav class="nav-lg">
        <v-btn text><router-link to='/home'>Home</router-link></v-btn>
        <v-btn text><router-link to='/about'>About</router-link></v-btn>
        <v-btn text><router-link to='/contact'>Contact</router-link></v-btn>
        <v-btn text v-if="!user"><router-link to='/login'>Login / Sign Up</router-link></v-btn>
        <v-btn text v-if="user"><router-link to='/plan'>Plan Event</router-link></v-btn>
        <v-btn text v-if="user"><router-link to='/account' v-if="user">Account</router-link></v-btn>
        <v-btn text @click="logout" v-if="user">Logout</v-btn>
      </nav>

    </div>

    <transition name="slide" mode="out-in">
        <v-container class="d-flex flex-column align-center" id="menu-wrap" v-if="isMenuOpen">
            <v-btn height="60" text @click="isMenuOpen = false"><router-link style="text-decoration:none; color:black; font-size:16pt;" to='/home'>Home</router-link></v-btn>
            <v-btn height="60" text @click="isMenuOpen = false"><router-link style="text-decoration:none; color:black; font-size:16pt;" to='/about'>About</router-link></v-btn>
            <v-btn height="60" text @click="isMenuOpen = false"><router-link style="text-decoration:none; color:black; font-size:16pt;" to='/contact'>Contact</router-link></v-btn>
            <v-btn height="60" text @click="isMenuOpen = false" v-if="!user"><router-link style="text-decoration:none; color:black; font-size:16pt;" to='/login'>Login / Sign Up</router-link></v-btn>
            <v-btn height="60" text @click="isMenuOpen = false" v-if="user"><router-link style="text-decoration:none; color:black; font-size:16pt;" to='/plan'>Plan Event</router-link></v-btn>
            <v-btn height="60" text @click="isMenuOpen = false" v-if="user"><router-link style="text-decoration:none; color:black; font-size:16pt;" to='/account' v-if="user">Account</router-link></v-btn>
            <v-btn height="60" text @click="logout" v-if="user" style="font-size:16pt;">Logout</v-btn>
        </v-container>
    </transition>

    <v-content>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </v-content>
    <v-snackbar v-model="snackbar" color="success" right>{{ snackbarText }}</v-snackbar>

    <div id="footer" class="d-flex align-center justify-center">
      <p>© 2019 Icon Culinary</p>
    </div>
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
        isMenuOpen: false
      }
    },
    beforeCreate() {
      this.$store.dispatch('retrieveUser')
    },
    computed: {
      user() {
        if(this.$store.getters.getUser) {
          return true;
        } else {
          return false;
        }
      }
    },
    watch: {
      user() {
        if(this.user) {
          this.snackbar = true;
          this.snackbarText = "Successfully Logged In!";
        } else {
          null
        }
      }
    },
    methods: {
      logout() {
        Firebase.auth().signOut()
        .then(() => {
          this.$router.replace('/');
          this.$store.dispatch('deleteUser');
          this.$store.dispatch('deleteEventPlan');
          this.snackbarText = 'Successfully Logged Out.';
          this.snackbar = true;
          this.isMenuOpen = false;
        })
        .catch(err => {throw err});
      },
      menuToggle() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  };
</script>

<style scoped lang="scss">
    @import './_variables.scss';

    body {
        padding: 30px;
    }
    #header {
      width: 100vw;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 20px 0px 20px;
      box-shadow: 0 0px 20px rgba(0, 0, 0, 0.4);
      background: $light;
    }
    #icon-logo {
      width: 80px;
      height: auto;
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
    #menu-wrap {
      width: 100vw;
      height: 100vh;
      background: $light;
      left: 0;
      top: 56px;
      position: absolute;
      z-index: 1000;
      .v-btn {
        width: 100%;
        font-family: $font;
      }
    }
    .router-link-exact-active {
      color: $second !important;
    }

    #footer {
      width: 100vw;
      height: 50px;
      background: $dark;
      p {
        font-family: $font;
        color: $light;
        margin: 0;
      }
    }

    // For medium screens
    @media only screen and (min-width: 48rem) {
      .nav-lg {
        display: initial;
      }
      .nav-lg {
        button {
          a {
            text-decoration: none;
            color: black;
          }
        }
      }
      .router-link-active, .router-link-exact-active {
        color: $second;
      }
      .nav-sm {
        display: none;
      }
    }

    // For large screens
    @media only screen and (min-width: 75rem) {

    }
</style>
