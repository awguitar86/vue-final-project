<template>
    <v-container class="d-flex flex-column align-center mt-5">
        <h2 class="text-uppercase" id="account-header">Welcome, {{ userName }}!</h2>
        <ul>
            <li v-for="item in userEventPlan" :key="item">{{ item }}</li>
        </ul>
    </v-container>
</template>
<script>
    export default {
        data() {
            return {
                userName: this.$store.getters.getUser.displayName,
                userEventPlan: this.$store.getters.getEventPlan
            }
        },
    }
</script>
<style lang="scss" scoped>
    #account-header {
        font-weight: 400;
    }
</style>