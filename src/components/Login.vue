<template>
    <v-container class="d-flex flex-column align-center mt-5">
        <h2 class="headline text-uppercase">Login</h2>
        <v-form id="login-form" class="mt-4">
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                type="email"
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
                required
            ></v-text-field>
            <v-btn 
                @click="login" 
                class="mt-4"
                id="login-btn"
                color="primary"
                depressed
            >Login</v-btn> 
            <p class="mt-4">You don't have an account? <router-link to='signup'>Create one!</router-link></p>
            <br><br>
            <v-alert type="error" v-if="alert">{{ alertText }}</v-alert>
        </v-form>
    </v-container>
</template>

<script>
    import Firebase from 'firebase';

    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => v.length >= 10 || 'Password must be at least 10 characters',
                ],
                alert: false,
                alertText: ''
            }
        },
        beforeCreate() {
            Firebase.auth().onAuthStateChanged((user) => {
                if(user === null) {
                    null;
                } else {
                    this.$router.push('account')
                }
            })
        },
        methods: {
            login() {
                Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(
                    user => {
                        this.$router.replace('account');
                        this.$store.dispatch('setUser');
                        this.snackbar = true;
                        console.log(user);
                    },
                    err => {
                        this.alertText = `Oops. ${err.message}`
                        this.alert = true;
                    }
                );
            }
        }
    }
</script>

<style scoped lang="scss">
    #login-form {
        width: 90%;
    }
    #login-btn {
        width: 100%;
        height: 50px;
    }

    @media only screen and (min-width: 48rem) {
        #login-form {
            width: 40%;
        }
    }

    // For large screens
    @media only screen and (min-width: 75rem) {

    }
</style>