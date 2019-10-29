<template>
    <v-container class="d-flex flex-column align-center mt-5">

        <div id="event-form" class="mt-4 d-flex flex-column align-center" v-if="!isSubmitted">
            <h1 class="headline text-uppercase">Plan Your Event!</h1>
            <v-text-field v-model="event.company" label="Company Name" type="text" required></v-text-field>
            <v-text-field v-model="event.companyRepName" label="Company Representative Name" type="text" required></v-text-field>
            <p class="event-picker">Event Date</p>
            <v-date-picker v-model="event.eventDate" no-title class="mb-4"></v-date-picker>
            <p class="event-picker">Event Start Time</p>
            <v-time-picker v-model="event.startTime" ampm-in-title :allowed-minutes="allowedMinutes" color="green accent-4" class="mb-4"></v-time-picker>
            <p class="event-picker">Event End Time</p>
            <v-time-picker v-model="event.endTime" ampm-in-title :allowed-minutes="allowedMinutes" color="red darken-4" class="mb-4"></v-time-picker>
            <v-text-field v-model="event.peopleCount" label="Number of People" type="text" required></v-text-field>
            <p class="event-picker">Number of Courses: {{ event.foodCourseCount }}</p>
            <v-slider v-model="event.foodCourseCount" min="1" max="7" ticks="always" tick-size="4" :tick-labels="foodCourseTickLabels" class="mt-0"></v-slider>
            <v-text-field v-model="event.mainFoodCourse" label="Main Course" type="text"></v-text-field>
            <v-text-field v-model="event.beverages" label="Beverages" type="text"></v-text-field>
            <v-text-field v-model="event.allergies" label="Food Allergies" type="text"></v-text-field>
            <v-text-field v-model="event.foodLifestyles" label="Food Lifestyles" type="text"></v-text-field>
            <v-text-field v-model="event.mainFoodCourse" label="Main Course" type="text"></v-text-field>
            <v-radio-group v-model="row" row>
                <v-radio label="Plated" value="plated" v-model="event.platedOrBuffet"></v-radio>
                <v-radio label="Buffet" value="buffet" v-model="event.platedOrBuffet"></v-radio>
            </v-radio-group>
            <div id="glassware-silverware" class="d-flex align-center justify-space-between">
                <v-switch v-model="event.useGlassware" label="Use Glassware"></v-switch>
                <v-switch v-model="event.useSilverware" label="Use Silverware"></v-switch>
            </div>

            <v-btn @click="addEvent" class="mt-6" id="event-btn" color="primary" depressed>Submit</v-btn> 
        </div>

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
                showStartTimePicker: false,
                showEndTimePicker: false,
                allowedMinutes: m => m % 5 === 0,
                foodCourseTickLabels: [1, 2, 3, 4, 5, 6, 7],
                event: {
                    allergies: '',
                    beverages: '',
                    company: '',
                    companyRepName: '',
                    endTime: '',
                    eventDate: '',
                    downPayment: '',
                    foodCourseCount: 1,
                    mainFoodCourse: '',
                    foodLifestyles: '',
                    longTableCount: '',
                    needsCoatCheck: '',
                    needsDecorations: false,
                    needsDj: false,
                    needsMicrophone: false,
                    needsWholeAquarium: false,
                    peopleCount: '',
                    platedOrBuffet: '',
                    roundTableCount: '',
                    serpentineTableCount: '',
                    specialRequests: '',
                    startTime: '',
                    tableClothColor: '',
                    tallTableCount: '',
                    useGlassware: false,
                    useSilverware: false,
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
    @import '../_variables.scss';
    #event-form {
        width: 95%;
        h1 {
            width: 100%;
            text-align: center;
        }
    }
    .v-input {
        width: 100%;
        margin-top: 20px;
    }
    .event-picker {
        width: 100%;
        color: rgba(0, 0, 0, 0.55);
        margin-top: 30px;
        margin-bottom: 10px;
    }
    #event-btn {
        width: 100%;
        height: 50px;
    }
    #glassware-silverware {
        width: 100%;
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