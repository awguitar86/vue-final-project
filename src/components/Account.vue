<template>
    <v-container class="d-flex flex-column align-center pt-0">

        <h2 class="text-uppercase mt-5" id="account-header">Account</h2>
        <p class="account-info mt-4">{{ this.userName }}</p>
        <p class="account-info">{{ this.userEmail }}</p>   
        <div id="edit-account-btns" class="d-flex align-center mt-5">
            <p class="mr-5" @click="isEmailModalOpen = !isEmailModalOpen">Edit Email</p>
            <p @click="isPasswordModalOpen = !isPasswordModalOpen">Change Password</p>
        </div>   

        <h3 class="text-uppercase mt-4 mb-3 events-header">Events</h3>
        <v-expansion-panels v-if="hasEvent">
            <v-expansion-panel>
                <v-expansion-panel-header>{{ userEventPlan.company }} Event</v-expansion-panel-header>
                <v-expansion-panel-content>
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
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <p v-else>No events scheduled</p>

        <div v-if="isEmailModalOpen" id="emailModal" class="d-flex flex-column align-center justify-start">
            <div class="edit-account-modal-wrap modal-wrap d-flex flex-column align-center" v-if="!editEmailComplete">
                <p class="close-modal mt-5" @click="isEmailModalOpen = !isEmailModalOpen"><v-icon size="28" color="blue-grey darken-3">mdi-close</v-icon></p>
                <EditEmail @updateEmailComplete="updateEmailModal($event)"></EditEmail>
            </div>
            <div class="edit-account-modal-wrap modal-complete-wrap d-flex flex-column align-center pt-3 pb-12" v-else>
                <p class="close-modal" @click="isEmailModalOpen = !isEmailModalOpen"><v-icon size="28" color="blue-grey darken-3">mdi-close</v-icon></p>
                <v-icon size="60" color="green accent-4" class="mt-5 mb-5">mdi-checkbox-marked-circle-outline</v-icon>
                <h3 class="text-uppercase">Your email has been changed!</h3>
            </div>
        </div>

        <div v-if="isPasswordModalOpen" id="passwordModal" class="d-flex flex-column align-center justify-start">
            <div class="edit-account-modal-wrap modal-wrap d-flex flex-column align-center" v-if="!isChangePasswordComplete">
                <p class="close-modal mt-2" @click="isPasswordModalOpen = !isPasswordModalOpen"><v-icon size="28" color="blue-grey darken-3">mdi-close</v-icon></p>
                <ChangePassword @updatePasswordComplete="updatePassword($event)"></ChangePassword>
            </div>
            <div class="edit-account-modal-wrap modal-complete-wrap d-flex flex-column align-center pt-3 pb-12" v-else>
                <p class="close-modal" @click="isPasswordModalOpen = !isPasswordModalOpen"><v-icon size="28" color="blue-grey darken-3">mdi-close</v-icon></p>
                <v-icon size="60" color="green accent-4" class="mt-5 mb-5">mdi-checkbox-marked-circle-outline</v-icon>
                <h3 class="text-uppercase">Your password has been changed!</h3>
            </div>
        </div>

    </v-container>
</template>
<script>
    import EventItem from './EventItem.vue';
    import EditEmail from './EditEmail.vue';
    import ChangePassword from './ChangePassword.vue';
    export default {
        data() {
            return {
                userName: this.$store.getters.getUser.displayName,
                userEmail: this.$store.getters.getUser.email,
                userEventPlan: [],
                hasEvent: false,
                isEmailModalOpen: false,
                editEmailComplete: false,
                isPasswordModalOpen: false,
                isChangePasswordComplete: false
            }
        },
        methods: {
            updateEmailModal(e) {
                console.log(e);
                this.editEmailComplete = e;
                let vm = this;
                setTimeout(() => {
                    vm.isEmailModalOpen = false;
                    vm.editEmailComplete = false;
                    this.userEmail = this.$store.getters.getUser.email
                }, 2000);
            },
            updatePassword(e) {
                this.isChangePasswordComplete = e;
                let vm = this;
                setTimeout(() => {
                    vm.isPasswordModalOpen = false;
                    vm.isChangePasswordComplete = false;
                }, 2000);
            }
        },
        created(){
            let uid = this.$store.getters.getUser.uid;
            this.$http.get(`${uid}.json`)
            .then( res => {
                if(res.body){
                    this.$store.dispatch('setEventPlan', res.body);
                    this.userEventPlan = res.body;
                    this.hasEvent = true;
                } else {
                    this.hasEvent = false;
                }
            })
            .catch(err => {
                console.log(err);
            });
        },
        components: {
            EventItem,
            EditEmail,
            ChangePassword
        }
    }
</script>
<style lang="scss" scoped>
    @import '../_variables.scss';
    #account-header {
        font-weight: 400;
        font-family: $font;
        width: 100%;
        border-bottom: solid 2px rgba(0,0,0,0.1);
    }
    .account-info {
        width: 100%;
        margin: 0;
        font-family: $font;
    }
    #edit-account-btns {
        width: 100%;
        p {
            color: $second;
            border-bottom: solid 1px $second;
            cursor: pointer;
            font-size: 11pt;
            font-family: $font;
        }
    }
    .events-header {
        width: 100%;
        font-weight: 400;
        font-family: $font;
        border-bottom: solid 2px rgba(0,0,0,0.1);
    }
    .v-expansion-panel-header {
        font-family: $font;
    }
    #emailModal {
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: 2000000;
        background: rgba(0,0,0,0.3);
    }
    #passwordModal {
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: 2000000;
        background: rgba(0,0,0,0.3);
    }
    .close-modal {
        width: 90%;
        text-align: right;
        cursor: pointer;
        margin: 0;
    }
    .modal-wrap {
        width: 90%;
        background: $light;
        margin-top: 20px;
        border-radius: 5px;
    }
    .modal-complete-wrap {
        width: 90%;
        background: $light;
        margin-top: 20px;
        border-radius: 5px;
        h2 {
            text-align: center;
        }
    }

    @media only screen and (min-width: 48rem) {
        .edit-account-modal-wrap {
            width: 45rem;
        }
    } 
</style>