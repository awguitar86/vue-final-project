<template>
    <div class="d-flex flex-column align-center">
        <div id="hero">
            <div id="hero-overlay" class="d-flex flex-column justify-center align-center">
                <div id="hero-text-wrap" class="d-flex flex-column justify-end align-center">
                    <h1 class="text-uppercase">The<br/>Living<br/>Planet Events!</h1>
                    <h2>You plan your event,<br/>We tak care of the rest.</h2>
                    <router-link :to="user ? '/plan' : '/signup'" class="plan-event-link"><v-btn color="primary" class="mt-5" id="plan-event-btn">Plan Your Event</v-btn></router-link>
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
        computed: {
            user() {
                if(this.$store.getters.getUser) {
                return true;
                } else {
                return false;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../_variables';

    #hero {
        width: 100vw;
        height: 100vh;
        background: url('../assets/decoratedTable.jpg') no-repeat;
        background-size: top left;
        background-position: 50% 0%;
        background-attachment: fixed;
    }
    #hero-overlay {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
    }
    #hero-text-wrap {
        width: 100%;
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
    .plan-event-link {
        width: 100%;
        display: flex;
        justify-content: center;
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

    @media only screen and (min-width: 26rem) {
        #hero {
            background-size: cover;
            background-position: 50% 0%;
            background-attachment: fixed;
        }
        .plan-event-link {
            width: 90%;
            justify-content: flex-start;
        }
        #plan-event-btn {
            width: 400px;
            height: 50px;
            font-family: $font;
        }
    }

    @media only screen and (min-width: 45rem) {
        #hero {
            width: 100vw;
            height: 100vh;
            background: url('../assets/peopleBySharks.jpg') no-repeat;
            background-size: cover;
            background-position: 50% 0%;
            background-attachment: fixed;
        }
    }

    @media only screen and (min-width: 75rem) {
        #hero-text-wrap {
            width: 75rem;
            h1, h2 {
                width: 100%;
            }
            .plan-event-link {
                width: 100%;
            }
        }
        #home-body {
            width: 75rem;
        }
        #benefit-1 {
            width: 100%;
        }
    }
</style>