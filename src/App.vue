<template>
  <v-app class="d-flex flex-colunm align-center">
    <div id="header" style="z-index:1020;">
      <div id="header-wrap">
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
          <router-link to='/home'><v-btn text>Home</v-btn></router-link>
          <router-link to='/about'><v-btn text>About</v-btn></router-link>
          <router-link to='/contact'><v-btn text>Contact</v-btn></router-link>
          <router-link to='/login'><v-btn text v-if="!user">Login / Sign Up</v-btn></router-link>
          <router-link to='/plan'><v-btn text v-if="user">Plan Event</v-btn></router-link>
          <router-link to='/account' v-if="user"><v-btn text v-if="user">Account</v-btn></router-link>
          <v-btn text @click="logout" v-if="user">Logout</v-btn>
        </nav>
      </div>

    </div>

    <transition name="slide" mode="out-in">
        <v-container id="menu-wrap" v-if="isMenuOpen">
            <router-link class="menu-nav-link" to='/home'><v-btn style="text-decoration:none; color:black; font-size:16pt;" height="60" text @click="isMenuOpen = false">Home</v-btn></router-link>
            <router-link class="menu-nav-link" to='/about'><v-btn style="text-decoration:none; color:black; font-size:16pt;" height="60" text @click="isMenuOpen = false">About</v-btn></router-link>
            <router-link class="menu-nav-link" to='/contact'><v-btn style="text-decoration:none; color:black; font-size:16pt;" height="60" text @click="isMenuOpen = false">Contact</v-btn></router-link>
            <router-link class="menu-nav-link" to='/login'><v-btn style="text-decoration:none; color:black; font-size:16pt;" height="60" text @click="isMenuOpen = false" v-if="!user">Login / Sign Up</v-btn></router-link>
            <router-link class="menu-nav-link" to='/plan'><v-btn style="text-decoration:none; color:black; font-size:16pt;" height="60" text @click="isMenuOpen = false" v-if="user">Plan Event</v-btn></router-link>
            <router-link class="menu-nav-link" to='/account' v-if="user"><v-btn style="text-decoration:none; color:black; font-size:16pt;" height="60" text @click="isMenuOpen = false" v-if="user">Account</v-btn></router-link>
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
      justify-content: center;
      box-shadow: 0 0px 20px rgba(0, 0, 0, 0.4);
      background: $light;
    }
    #header-wrap {
      width: 95%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background: $light;
      left: 0;
      top: 56px;
      position: absolute;
      z-index: 1000;
      .menu-nav-link {
        width: 100%;
      }
      .v-btn {
        width: 100%;
        font-family: $font;
      }
    }
    .router-link-exact-active {
      .v-btn {
        color: $second !important;
      }
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
        a {
          text-decoration: none;
          color: black;
        }
      }
      .router-link-active, .router-link-exact-active {
        color: $second;
      }
      .nav-sm {
        display: none;
      }
      #menu-wrap {
        display: none;
      }
    }

    // For large screens
    @media only screen and (min-width: 75rem) {
      #header-wrap {
        width: 75rem;
      }
    }
</style>
