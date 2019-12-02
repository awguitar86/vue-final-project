<template>
    <v-container class="d-flex flex-column align-center mt-5">
        <h1 class="headline text-uppercase mb-3 text-center">About Living Planet Events</h1>
        <div id="about-section-one">
            <img src="../assets/food-platters.jpg" alt="food plater" id="food-platter-img"/>
            <p>
                We are dedicated to make your special events everything you could want and more. We offer a full service experience that will 
                leave you and your guests more than satisfied. We provide a menu that is custom to you and your wants and needs, created at the 
                hands of our Executive Chef, Dave Prows. We pride ourselves in quality and outstanding customer service.
                <br/>
                <br/>
                In 2017 the Loveland Living Planet Aquarium had a major need for serving and providing better food for their customers, and making 
                the Aquarium the best place for people to have there events at. By creating a partnership with two amazing people in the food industry,
                we responded to the Aquarium's need and started The Living Planet Events. We make the best food for their customers, and we The Loveland
                Living Planet Aquarium the best place to have events.
            </p>
        </div>
        
        <h2 class="our-people headline text-uppercase">Our People</h2>
        <div id="about-section-two">
            <p>
                Our creators, owners, chefs and managers have been in the catering and events business for many years. With over 40 years experience 
                with multiple corporations we bring all the knowlege and professionalism you won’t find anywhere else. We have a staff that works
                hard to make your experience the best it can possibly be. Our people will take care of you so well that you will be counting down
                the days for the next event you have with us.
            </p>
            <img src="../assets/chef.jpg" alt="chef cooking food" id="chef-img"/>
        </div>
    
    </v-container>
</template>

<style lang="scss" scoped>
    #about-section-one {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;   
        margin-top: 20px;     
        #food-platter-img {
            width: 95%;
            height: auto;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        p {
            width: 95%;
        }
    }
    .our-people {
        width: 95%;
        margin-top: 20px;
    }
    #about-section-two {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        #chef-img {
            width: 95%;
            height: auto;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        p {
            width: 95%;
        }
    }

    @media only screen and (min-width: 48rem) {
        #about-section-one {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            #food-platter-img {
                width: 48%;
                height: auto;
                border-radius: 5px;
            }
            p {
                width: 48%;
            }
        }
        .our-people {
            width: 100%;
        }
        #about-section-two {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            margin-top: 20px;
            #chef-img {
                width: 48%;
                height: auto;
                border-radius: 5px;
                margin-bottom: 20px;
            }
            p {
                width: 48%;
            }
        }
    }

    @media only screen and (min-width: 75rem) {
        #about-section-one {
        width: 75rem;
        }
        .our-people {
            width: 75rem;
        }
        #about-section-two {
            width: 75rem;
            #chef-img {
                width: 30%;
            }
            p {
                width: 66%;
            }
        }
    }
</style>