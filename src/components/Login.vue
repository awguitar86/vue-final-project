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
                color="primary"
                depressed
            >Login</v-btn> 
            <p class="mt-4">You don't have an account? You can <router-link to='signup'>create one</router-link>!</p>
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
            }
        },
        methods: {
            login() {
                Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(
                    user => {
                        this.$router.replace('account');
                        this.$store.dispatch('setUser');
                        this.snackbar = true;
                    },
                    err => {
                        alert(`Oops. ${err.message}`)
                    }
                );
            }
        }
    }
</script>

<style scoped>
    #login-form {
        width: 40%;
    }
</style>