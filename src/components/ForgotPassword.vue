<template>
    <v-container class="d-flex flex-column align-center mt-5">
        <div id="forgot-password-wrap" width="100%" class="d-flex flex-column align-center mt-5" v-if="!isForgotPassFormSubmitted">
            <h2 class="headline text-uppercase">Forgot Password</h2>
            <p class="mt-4">Forgot your password? No Problem, we will fix it. Just type your email below and we will send you a password recovery email.</p>
            <v-form id="pass-reset-form" class="d-flex flex-column align-center">
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Your Email"
                    type="email"
                    id="email-input"
                    required
                ></v-text-field>
                <v-btn
                    type="submit"
                    @click="passwordReset"
                    class="mt-4"
                    id="pass-reset-btn"
                    color="primary"
                    depressed
                >Submit</v-btn>
                <p class="mt-6"><router-link to='/login'>Back to Login</router-link></p>
                <br><br>
                <v-alert type="error" v-if="alert">{{ alertText }}</v-alert>
            </v-form>
        </div>

        <div id="forgot-pass-confirm-submit" v-if="isForgotPassFormSubmitted">
            <v-icon size="100" color="green accent-4" class="mr-2">mdi-checkbox-marked-circle-outline</v-icon>
            <h2 class="headline text-uppercase">Thank you!</h2>
            <p>Check your email for password reset instructions.</p>
        </div>
    </v-container>
</template>

<script>
    import Firebase from 'firebase';

    export default {
        data() {
            return {
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                alert: false,
                alertText: '',
                isForgotPassFormSubmitted: false
            }
        },
        methods: {
            passwordReset(e) {
                e.preventDefault();
                Firebase.auth().sendPasswordResetEmail(this.email)
                .then(() => {
                    this.isForgotPassFormSubmitted = true;
                    console.log('Email Sent!')
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
    #forgot-password-wrap {
        p {
            width: 90%;
        }
    }
    #pass-reset-form {
        width: 90%;
        .v-input {
            width: 100%;
        }
        p {
            width: 100%;
            text-align: center;
        }
    }
    #pass-reset-btn {
        width: 100%;
        height: 50px;
    }

    #forgot-pass-confirm-submit {
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
            margin-top: 10px;
            margin-bottom: 20px;
        }
        p {
            text-align: center;
        }
    }

    @media only screen and (min-width: 27rem) {
        #forgot-password-wrap {
            width: 27rem;
        }
    }

    // For large screens
    @media only screen and (min-width: 75rem) {

    }
</style>