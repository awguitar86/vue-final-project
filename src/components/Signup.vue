<template>
    <v-container class="d-flex flex-column align-center mt-5">
        <h2 class="headline text-uppercase">Let's create a new account!</h2>
        <v-form id="login-form" class="mt-4">
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
            ></v-text-field>
            <v-text-field
                v-model="confirmPassword"
                :rules="passwordRules"
                label="Confirm Password"
                required
            ></v-text-field>
            <v-btn 
                @click="signUp" 
                :disabled="confirmPassword !== password"
                class="mt-4 mr-4"
                color="primary"
                depressed
            >Sign Up</v-btn> 
            <router-link to="./login">
                <v-btn class="mt-4" depressed>Back to Login</v-btn>
            </router-link>
            <v-alert type="error" dense v-if="confirmPassword !== password" class="mt-4">Passwords Do Not Match!</v-alert>
        </v-form>    
    </v-container>
</template>

<script>
    import Firebase from 'firebase';

    export default {
        name: 'signUp',
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => v.length >= 10 || 'Password must be at least 10 characters',
                ]
            }
        },
        methods: {
            signUp() {
                Firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    user => {
                        this.$router.replace('account');
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
