<template>
    <div class="d-flex flex-column align-center">
        <div id="hero">
            <div id="hero-overlay" class="d-flex flex-column justify-center align-center">
                <div id="hero-text-wrap" class="d-flex flex-column justify-end align-center">
                    <h1 class="text-uppercase">The<br/>Living<br/>Planet Events!</h1>
                    <h2>You plan your event,<br/>We take care of the rest.</h2>
                    <router-link :to="user ? '/plan' : '/signup'" class="plan-event-link"><v-btn color="primary" class="mt-5" id="plan-event-btn">Plan Your Event</v-btn></router-link>
                </div>
            </div>
        </div>
        <div id="home-body" class="d-flex flex-column align-center">
            <section id="home-section">
                <h2 class="text-uppercase">The perfect place for your events!</h2>
                <p class="home-text">
                    The Loveland Living Planet Aquarium is the perfect place for your event. We have lots of space to hold as many people as you need, 
                    and a fantastic staff that always strives to make your experience the best experience possible. Our chefs come with a combined
                    40 years experience and they make the food that will keep you coming back for seconds.
                    <br/>
                    <br/>
                    Our website is the perfect place for you to schedule your event hassle free. Signup with an account and fill out the event plan form
                    with the details that will help us to better prepare for your special event. We promise that you will absolutley love having your event here.
                </p>
                <div id="home-pics-wrap">
                    <img src="../assets/acrobaticsGirl.jpg" alt="Acrobatics Girl" class="home-pictures" id="acrobatics-pic"/>
                    <img src="../assets/throwingFire.jpg" alt="Man Throwing Fire" class="home-pictures" id="fire-throwing-pic"/>
                    <img src="../assets/foodBySharks.jpg" alt="Food by Shark Tank" class="home-pictures" id="food-by-sharks-pic"/>
                    <img src="../assets/fruit.jpg" alt="Fruit" class="home-pictures" id="fruit-pic"/>
                    <img src="../assets/miniPies.jpg" alt="Mini Pies" class="home-pictures" id="mini-pies-pic"/>
                    <img src="../assets/skewers.jpg" alt="Skewers" class="home-pictures" id="skewers-pic"/>
                </div>
            </section>
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
        background: white;
    }
    #home-section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
            width: 90%;
            font-family: $font;
            text-align: center;
            margin-top: 40px;
            margin-bottom: 20px;
        }
        .home-text {
            width: 95%;
            margin-bottom: 20px;
        }
    }
    #home-pics-wrap {
        width: 100%;
        margin-bottom: 20px;
        display: grid;
        gap: 20px;
        justify-items: center;
        grid-template-areas: 
            "acrobatics"
            "fire"
            "food-sharks"
            "fruit"
            "pies"
            "skewers"   
        ;
        .home-pictures {
            width: 95%;
            height: auto;
        }
        #acrobatics-pic {
            grid-area: acrobatics;
        }
        #fire-throwing-pic {
            grid-area: fire;
        }
        #food-by-sharks-pic {
            grid-area: food-sharks;
        }
        #fruit-pic {
            grid-area: fruit;
        }
        #mini-pies-pic {
            grid-area: pies;
        }
        #skewers-pic {
            grid-area: skewers;
        }
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
        #home-pics-wrap {
            width: 95%;
            grid-template-areas: 
                "acrobatics fire"
                "food-sharks fruit"
                "pies skewers"   
            ;
            .home-pictures {
                width: 100%;
                height: auto;
            }
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
        #home-pics-wrap {
            width: 75rem;
            grid-template-areas: 
                "acrobatics fire food-sharks"
                "fruit pies skewers"   
            ;
        }
    }
</style>