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
            :rules="emailRules"
            label="Confirm New Email"
            type="email"
            required
        ></v-text-field>
        <v-btn 
            @click="editEmail" 
            class="mt-4"
            id="submit-new-email-btn"
            color="primary"
            depressed
        >Submit</v-btn> 
    </div>
</template>

<script>
export default {
    props: ['newEmail', 'confirmNewEmail', 'editEmail', 'emailRules'],
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
</style> 