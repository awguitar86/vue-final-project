<template>
    <div id="change-password-form" class="mt-4 d-flex flex-column align-center pb-8">
        <v-text-field
            v-model="newPassword"
            :rules="passwordRules"
            label="New Password"
            type="password"
            required
        ></v-text-field>
        <v-text-field
            v-model="confirmNewPassword"
            :rules="passwordRules"
            label="Confirm New Password"
            type="password"
            required
        ></v-text-field>
        <v-btn
            type="submit"
            @click="changePassword"
            class="mt-4"
            width="90%"
            height="50px"
            id="password-btn"
            color="primary"
            depressed
        >Submit</v-btn>
        <v-alert type="error" dense v-if="error" class="mt-4">Error {{ error }}</v-alert>
    </div>
</template>

<script>
import Firebase from 'firebase';
export default {
    data() {
        return {
            newPassword: '',
            confirmNewPassword: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 10 || 'Password must be at least 10 characters',
            ],
            confirmPasswordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 10 || 'Password must be at least 10 characters',
                v => v === this.newPassword || 'Passwords must match.'
            ],
            error: '',
            isError: false
        }
    },
    methods: {
        changePassword() {
            Firebase.auth().currentUser.updatePassword(this.newPassword).then((res) => {
                this.$emit('updatePasswordComplete', true);
                console.log(res);
            }).catch( err => {
                this.error = err;
                throw err;

            });
        }
    },
}
</script>
<style lang="scss" scoped>
    @import '../_variables';
    #change-password-form {
        width: 100%;
    }
    .v-input {
        width: 90%;
    }
</style>