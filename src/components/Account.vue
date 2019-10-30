<template>
    <v-container class="d-flex flex-column align-center mt-5">
        <h2 class="text-uppercase" id="account-header">Welcome, {{ userName }}!</h2>
        <v-list width="100%">
            <EventItem name="Company" :value="userEventPlan.company"></EventItem>
            <EventItem name="Company Rep" :value="userEventPlan.companyRepName"></EventItem>
            <EventItem name="Event Date" :value="userEventPlan.eventDate"></EventItem>
            <EventItem name="Event Start Time" :value="userEventPlan.startTime"></EventItem>
            <EventItem name="Event End Time" :value="userEventPlan.endTime"></EventItem>
            <EventItem name="Number of People" :value="userEventPlan.peopleCount"></EventItem>
            <EventItem name="Number of Courses" :value="userEventPlan.foodCourseCount"></EventItem>
            <EventItem name="Main Course" :value="userEventPlan.mainFoodCourse"></EventItem>
            <EventItem name="Beverages" :value="userEventPlan.beverages"></EventItem>
            <EventItem name="Food Allergies" :value="userEventPlan.allergies"></EventItem>
            <EventItem name="Food Lifestyles" :value="userEventPlan.foodLifestyles"></EventItem>
            <EventItem name="Plated or Buffet" :value="userEventPlan.platedOrBuffet"></EventItem>
            <EventItem name="Use Glassware" :value="userEventPlan.useGlassware ? 'Yes' : 'No'"></EventItem>
            <EventItem name="Use Silverware" :value="userEventPlan.useSilverware ? 'Yes' : 'No'"></EventItem>
            <EventItem name="Need Whole Aquarium" :value="userEventPlan.needsWholeAquarium ? 'Yes' : 'No'"></EventItem>
            <EventItem name="Need Coat Check" :value="userEventPlan.needsCoatCheck ? 'Yes' : 'No'"></EventItem>
            <EventItem name="Number of Round Tables" :value="userEventPlan.roundTableCount"></EventItem>
            <EventItem name="Number of Long Tables" :value="userEventPlan.longTableCount"></EventItem>
            <EventItem name="Number of Tall Tables" :value="userEventPlan.tallTableCount"></EventItem>
            <EventItem name="Number of Serpentine Tables" :value="userEventPlan.serpentineTableCount"></EventItem>
            <EventItem name="Special Requests" :value="userEventPlan.specialRequests"></EventItem>
        </v-list>
    </v-container>
</template>
<script>
    import EventItem from './EventItem.vue';
    export default {
        data() {
            return {
                userName: this.$store.getters.getUser.displayName,
                userEventPlan: []
            }
        },
        created(){
            let uid = this.$store.getters.getUser.uid;
            this.$http.get(`${uid}.json`)
            .then( res => {
                this.$store.dispatch('setEventPlan', res.body);
                this.userEventPlan = res.body;
            });
        },
        components: {
            EventItem
        }
    }
</script>
<style lang="scss" scoped>
    #account-header {
        font-weight: 400;
    }
</style>