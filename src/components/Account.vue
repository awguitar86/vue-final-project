<template>
    <v-container class="d-flex flex-column align-center mt-5">
        <h2 class="headline text-uppercase">Welcome to your Account!</h2>
        <v-snackbar v-model="snackbar" bottom>{{ snackbarText }}</v-snackbar>
    </v-container>
</template>
<script>
    import Firebase from 'firebase';

    export default {
        data() {
            return {
                snackbar: false,
                snackbarText: 'Successfully Logged In!'
            }
        },
        created() {
            const user = Firebase.auth().currentUser;
            user ? this.snackbar = true : this.snackbar = false;
        }
        
    }
</script>