<template>
    <v-container class="d-flex flex-column align-center mt-5">

        <div id="event-form" class="mt-4 d-flex flex-column align-center" v-if="!isSubmitted">
            <h1 class="headline text-uppercase">Plan Your Event!</h1>
            <v-text-field v-model="event.company" label="Company Name" type="text" required></v-text-field>
            <v-text-field v-model="event.companyRepName" label="Company Representative Name" type="text" required></v-text-field>
            <p class="event-picker">Event Date</p>
            <v-date-picker v-model="event.eventDate" no-title class="mb-4" required></v-date-picker>
            <p class="event-picker">Event Start Time</p>
            <v-time-picker v-model="event.startTime" ampm-in-title :allowed-minutes="allowedMinutes" color="green accent-4" class="mb-4" required></v-time-picker>
            <p class="event-picker">Event End Time</p>
            <v-time-picker v-model="event.endTime" ampm-in-title :allowed-minutes="allowedMinutes" color="red darken-4" class="mb-4" required></v-time-picker>
            <v-text-field v-model="event.peopleCount" label="Number of People" type="text" required></v-text-field>
            <p class="event-picker">Number of Courses: {{ event.foodCourseCount }}</p>
            <v-slider v-model="event.foodCourseCount" min="1" max="7" ticks="always" tick-size="4" :tick-labels="foodCourseTickLabels" class="mt-0" required></v-slider>
            <v-text-field v-model="event.mainFoodCourse" label="Main Course" type="text" required></v-text-field>
            <v-text-field v-model="event.beverages" label="Beverages" type="text" required></v-text-field>
            <v-text-field v-model="event.allergies" label="Food Allergies" type="text" required></v-text-field>
            <v-text-field v-model="event.foodLifestyles" label="Food Lifestyles" type="text" required></v-text-field>
            <v-radio-group row v-model="event.platedOrBuffet">
                <v-radio label="Plated" value="plated"></v-radio>
                <v-radio label="Buffet" value="buffet"></v-radio>
            </v-radio-group>
            <div class="boolean-selects d-flex align-center justify-space-between">
                <v-switch v-model="event.useGlassware" label="Use Glassware" color="success"></v-switch>
                <v-switch v-model="event.useSilverware" label="Use Silverware" color="success"></v-switch>
            </div>
            <div class="boolean-selects d-flex align-center justify-space-between">
                <v-switch v-model="event.needsWholeAquarium" label="Need Whole Aquarium" color="success"></v-switch>
                <v-switch v-model="event.needsCoatCheck" label="Need Coat Check" color="success"></v-switch>
            </div>
            <p class="event-picker">Number of Round Tables: {{ event.roundTableCount }}</p>
            <v-slider v-model="event.roundTableCount" min="0" max="20" ticks="always" tick-size="2" class="mt-0"></v-slider>
            <p class="event-picker">Number of Long Tables: {{ event.longTableCount }}</p>
            <v-slider v-model="event.longTableCount" min="0" max="20" ticks="always" tick-size="2" class="mt-0"></v-slider>
            <p class="event-picker">Number of Tall Tables: {{ event.tallTableCount }}</p>
            <v-slider v-model="event.tallTableCount" min="0" max="20" ticks="always" tick-size="2" class="mt-0"></v-slider>
            <p class="event-picker">Number of Serpentine Tables: {{ event.serpentineTableCount }}</p>
            <v-slider v-model="event.serpentineTableCount" min="0" max="20" ticks="always" tick-size="2" class="mt-0"></v-slider>
            <v-textarea v-model="event.specialRequests" label="Special Requests" type="text"></v-textarea>

            <v-btn type="submit" @click="addEvent" class="mt-6" id="event-btn" color="primary" depressed>Submit</v-btn>
        </div>

        <div id="confirm-submit" v-if="isSubmitted">
            <v-icon size="100" color="green accent-4" class="mr-2">mdi-checkbox-marked-circle-outline</v-icon>
            <h1>Thank you for planning your event with us!</h1>
            <p>Your event reference number is 123456.</p>
            <p>We will contact you within 48 hours to confirm.</p>
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
                    foodCourseCount: 1,
                    mainFoodCourse: '',
                    foodLifestyles: '',
                    longTableCount: 0,
                    needsCoatCheck: false,
                    needsWholeAquarium: false,
                    peopleCount: '',
                    platedOrBuffet: 'buffet',
                    roundTableCount: 0,
                    serpentineTableCount: 0,
                    specialRequests: '',
                    startTime: '',
                    tallTableCount: 0,
                    useGlassware: false,
                    useSilverware: false,
                },
                resource: {},
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
    .boolean-selects {
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