<template>
    <v-container class="d-flex flex-column align-center mt-5">
        <v-form id="event-form" class="mt-4" v-if="!isSubmitted">
            <h1 class="headline text-uppercase">Plan Your Event!</h1>
            <v-text-field
                v-model="event.name"
                label="Name"
                type="text"
                required
            ></v-text-field>
            <v-text-field
                v-model="event.date"
                label="Date"
                type="text"
                required
            ></v-text-field>
            <v-text-field
                v-model="event.food"
                label="Food"
                type="text"
                required
            ></v-text-field>
            <v-text-field
                v-model="event.peopleCount"
                label="Number of People"
                type="text"
                required
            ></v-text-field>
            <v-btn 
                @click="addEvent" 
                class="mt-4"
                id="event-btn"
                color="primary"
                depressed
            >Submit</v-btn> 
        </v-form>

        <div id="confirm-submit" v-if="isSubmitted">
            <v-icon size="100" color="green accent-4" class="mr-2">mdi-checkbox-marked-circle-outline</v-icon>
            <h1>Thank you for planning your event with us!</h1>
            <p>Your event reference number is 123456.</p>
            <p>You will receive a confirmation email. We will contact you within 48 hours to confirm.</p>
        </div>
    </v-container>
</template>

<script>

    export default {
        data() {
            return {
                userId: this.$store.getters.getUser.uid,
                isSubmitted: false,
                event: {
                    name: '',
                    date: '',
                    food: '',
                    peopleCount: '',
                },
                resource: {}
            }
        },
        methods: {
            addEvent() {
                this.resource.saveEvent(this.event)
                .then(res => {
                    console.log(res)
                    this.isSubmitted = true;
                })
                .catch(err => {throw err});
            }
        },
        created() {
            const customActions = {
                saveEvent: {method: 'POST', url: `${this.userId}.json`}
            }
            this.resource = this.$resource('data.json', {}, customActions)
        }
    }
</script>

<style scoped lang="scss">
    #event-form {
        width: 95%;
        h1 {
            width: 100%;
            text-align: center;
        }
    }
    #event-btn {
        width: 100%;
        height: 50px;
    }

    #confirm-submit {
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            margin-top: 10px;
            margin-bottom: 20px;
            width: 100%;
        }
        p {
            width: 100%;
        }
    }

    @media only screen and (min-width: 48rem) {
        #event-form {
            width: 40%;
        }
    }

    // For large screens
    @media only screen and (min-width: 75rem) {

    }
</style>