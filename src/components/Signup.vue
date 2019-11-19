<template>
    <v-container class="d-flex flex-column align-center mt-5">
        <h2 class="headline text-uppercase">Sign Up</h2>
        <v-form id="login-form" class="mt-4 d-flex flex-column align-center">
            <v-text-field
                v-model="name"
                label="Name"
                type="text"
                required
            ></v-text-field>
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
            <v-text-field
                v-model="confirmPassword"
                :rules="passwordRules"
                label="Confirm Password"
                type="password"
                required
            ></v-text-field>
            <v-btn
                type="submit"
                @click="signUp"
                :disabled="confirmPassword !== password"
                class="mt-4"
                id="signup-btn"
                color="primary"
                depressed
            >Sign Up</v-btn>
            <p class="mt-4"><router-link to="./login">Back to Login</router-link></p>
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
                name: '',
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
            signUp(e) {
                e.preventDefault();
                Firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    user => {
                        Firebase.auth().onAuthStateChanged(user => user.updateProfile({displayName: this.name}));
                        this.$router.replace('account');
                        this.$store.dispatch('setUser');
                        console.log(user);
                        Firebase.auth().currentUser.sendEmailVerification()
                            .then(() => console.log('Email Sent'))
                            .catch(err => console.log(`Error: ${err}`))
                    },
                    err => {
                        alert(`Oops. ${err.message}`)
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
    #signup-btn {
        width: 100%;
        height: 50px;
    }
    #back-to-login {
        width: 100%;

    }

    @media only screen and (min-width: 27rem) {
        #login-form {
            width: 27rem;
        }
    }
</style>
