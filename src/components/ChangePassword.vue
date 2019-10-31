<template>
    <div class="change-password-form mt-4 d-flex flex-column align-center">
        <v-text-field
            v-model="newPassword"
            :rules="passwordRules"
            label="Email"
            type="email"
            id="email-input"
            required
        ></v-text-field>
        <v-text-field
            v-model="confirmNewPassword"
            :rules="passwordRules"
            label="Password"
            type="password"
            id="password-input"
            required
        ></v-text-field>
        <v-btn 
            @click="changePassword" 
            class="mt-4"
            id="login-btn"
            color="primary"
            depressed
        >Submit</v-btn> 
    </div>
</template>

<script>
export default {
    props: ['newPassword', 'confirmNewPassword', 'changePassword', 'passwordRules']
}
</script>
<style lang="scss" scoped>
    @import '../_variables';
    .change-password-form {
        width: 90%;
        background: $light;
    }
</style>    