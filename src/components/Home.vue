<template>
    <div>
        <div id="hero">
            <div id="hero-overlay" class="d-flex flex-column justify-end align-center">
                <div class="d-flex flex-column justify-end align-center ">
                    <h1 class="text-uppercase">The<br/>Living<br/>Planet Events!</h1>
                    <h2>You plan your event,<br/>We tak care of the rest.</h2>
                    <router-link to="/signup" style="width:100%;" class="d-flex justify-center"><v-btn color="primary" class="mt-5" id="plan-event-btn">Plan Your Event</v-btn></router-link>
                </div>
            </div>
        </div>
        <div id="home-body" class="d-flex flex-column align-center">
            <div class="d-flex align-start mt-5" id="benefit-1">
                <v-icon size="28" color="green accent-4" class="mr-2">mdi-checkbox-marked-circle-outline</v-icon>
                <p><strong>Lots of Space</strong> to hold any amount of people coming to your event.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import '../_variables';

    #hero {
        width: 100vw;
        height: 100vh;
        background: url('../assets/smallPies.jpg') no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
    #hero-overlay {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        h1 {
            width: 90%;
            font-family: $font;
            font-size: 30pt;
            color: $light;
            text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
        }
        h2 {
            width: 90%;
            font-family: $font;
            color: $light;
            text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
        }
    }
    #plan-event-btn {
        width: 90%;
        height: 50px;
        font-family: $font;
    }
    #home-body {
        width: 100vw;
        height: 800px;
        background: white;
    }
    #benefit-1 {
        width: 90%;
        font-family: $font;
    }
</style>