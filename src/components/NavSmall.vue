<template>
    <v-container class="d-flex flex-column align-center mt-5">
        <v-btn height="60" text><router-link style="text-decoration:none; color:black; font-size:16pt;" to='/'>Home</router-link></v-btn>
        <v-btn height="60" text><router-link style="text-decoration:none; color:black; font-size:16pt;" to='/about'>About</router-link></v-btn>
        <v-btn height="60" text><router-link style="text-decoration:none; color:black; font-size:16pt;" to='/contact'>Contact</router-link></v-btn>
        <v-btn height="60" text v-if="!user"><router-link style="text-decoration:none; color:black; font-size:16pt;" to='/login'>Login / Sign Up</router-link></v-btn>
        <v-btn height="60" text v-if="user"><router-link style="text-decoration:none; color:black; font-size:16pt;" to='/plan'>Plan Event</router-link></v-btn>
        <v-btn height="60" text v-if="user"><router-link style="text-decoration:none; color:black; font-size:16pt;" to='/account' v-if="user">Account</router-link></v-btn>
        <v-btn height="60" text @click="logout" v-if="user">Logout</v-btn>
    </v-container>
</template>

<style lang="scss" scoped>
    .v-btn {
        width: 100%;
    }
</style>