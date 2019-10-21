<template>
    <v-container class="d-flex flex-column align-center mt-5">
        <h2 class="text-uppercase" id="account-header">Welcome, {{ userName }}!</h2>
    </v-container>
</template>
<script>
    import Firebase from 'firebase';

    export default {
        data() {
            return {
                userName: this.$store.getters.getUser.displayName
            }
        },
        
    }
</script>
<style lang="scss" scoped>
    #account-header {
        font-weight: 400;
    }
</style>