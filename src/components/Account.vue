<template>
    <v-container class="d-flex flex-column align-center mt-5">
        <h2 class="headline text-uppercase">Welcome to your Account {{ userName }}!</h2>
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