<template>
    <div id="change-email-form" class="d-flex flex-column align-center pb-8">
        <v-text-field
            v-model="newEmail"
            :rules="emailRules"
            label="New Email"
            type="email"
            required
        ></v-text-field>
        <v-text-field
            v-model="confirmNewEmail"
            :rules="confirmEmailRules"
            label="Confirm New Email"
            type="email"
            required
        ></v-text-field>
        <v-btn
            type="submit"
            @click="editEmail"
            class="mt-4"
            width="90%"
            height="50px"
            id="submit-new-email-btn"
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
            newEmail: '',
            confirmNewEmail: '',
            emailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+/.test(v) || 'Email must be valid'
            ],
            confirmEmailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+/.test(v) || 'Email must be valid',
                v => v === this.newEmail || 'Email must match'
            ],
            isError: false,
            error: ''
        }
    },
    methods: {
        editEmail() {
            Firebase.auth().currentUser.updateEmail(this.newEmail).then( (res) => {
                this.$store.dispatch('setUser');
                console.log(res);
                this.$emit('updateEmailComplete', true);
            }).catch( err => {
                this.error = err;
                throw err;
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../_variables';
    #change-email-form {
        width: 100%;
    }
    .v-input {
        width: 90%;
    }

    @media only screen and (min-width: 48rem) {
        #change-email-form {
            width: 45rem;
        }
    } 
</style>