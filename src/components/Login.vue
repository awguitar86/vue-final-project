<template>
    <v-container class="d-flex flex-column align-center mt-5">
        <h2 class="headline text-uppercase">Login</h2>
        <v-form id="login-form" class="mt-4 d-flex flex-column align-center">
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                type="email"
                id="email-input"
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
                id="password-input"
                required
            ></v-text-field>
            <v-btn
                type="submit"
                @click="login"
                class="mt-4"
                id="login-btn"
                color="primary"
                depressed
            >Login</v-btn>
            <p id="forgot-password" class="mt-6"><router-link to='/forgot-password'>Forgot Password?</router-link></p>
            <p class="mt-2">You don't have an account? <router-link to='/signup'>Create one!</router-link></p>
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
            login(e) {
                e.preventDefault();
                Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(
                    user => {
                        this.$store.dispatch('setUser');
                        console.log(user);
                        this.$router.replace('account');
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
        .v-input {
            width: 100%;
        }
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