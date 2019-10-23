<template>
    <v-container class="d-flex flex-column align-center mt-5">
        <h1 class="headline text-uppercase">Plan Component</h1>
        <v-form id="login-form" class="mt-4">
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
                id="login-btn"
                color="primary"
                depressed
            >Submit</v-btn> 
        </v-form>
    </v-container>
</template>

<script>

    export default {
        data() {
            return {
                userId: this.$store.getters.getUser.uid,
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
                this.resource.saveEvent(this.event);
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