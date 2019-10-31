<template>
    <v-container class="d-flex flex-column align-center pt-0">

        <h2 class="text-uppercase mt-5" id="account-header">Account</h2>
        <p class="account-info mt-4">{{ this.userName }}</p>
        <p class="account-info">{{ this.userEmail }}</p>   
        <div id="edit-account-btns" class="d-flex align-center mt-5">
            <p class="mr-5" @click="isEmailDialogOpen = !isEmailDialogOpen">Edit Email</p>
            <p>Change Password</p>
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

        <div v-if="isEmailDialogOpen" id="emailModal" class="d-flex flex-column align-center justify-start">
            <div class="email-modal-wrap d-flex flex-column align-center">
                <p class="close-email-modal" @click="isEmailDialogOpen = !isEmailDialogOpen"><v-icon size="28" color="blue-grey darken-3">mdi-close</v-icon></p>
                <EditEmail :newEmail="newEmail" :confirmNewEmail="confirmNewEmail" :editEmail="editEmail" :emailRules="emailRules"></EditEmail>
            </div>
        </div>

        <div v-if="isPasswordDialogOpen" width="100%" id="passwordModal">
            <ChangePassword :newPassword="newPassword" :confirmNewPassword="confirmNewPassword" :changePassword="changePassword" :passwordRules="passwordRules"></ChangePassword>
        </div>

    </v-container>
</template>
<script>
    import Firebase from 'firebase';
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
                isEmailDialogOpen: true,
                isPasswordDialogOpen: false,
                newEmail: '',
                confirmNewEmail: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                newPassword: '',
                confirmNewPassword: '',
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => v.length >= 10 || 'Password must be at least 10 characters',
                ]
            }
        },
        methods: {
            editEmail() {
                Firebase.auth().currentUser.updateEmail(this.newEmail).then( (res) => {
                    console.log(res);
                }).catch( err => {throw err});
            },
            changePassword() {
                Firebase.auth().currentUser.updatePassword(this.password).then((res) => {
                    console.log(res);
                }).catch( err => {throw err});
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
    .close-email-modal {
        width: 90%;
        text-align: right;
        cursor: pointer;
        margin: 0;
        margin-top: 10px;
    }
    .email-modal-wrap {
        width: 90%;
        background: $light;
        margin-top: 20px;
        border-radius: 5px;
    }
    .email-close-modal {
        margin: 0;
        margin-top: 15px;
        width: 85%;
        text-align: right;
        color: $prime;
        cursor: pointer;
    }
</style>