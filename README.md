# Vue Final Project

This is my final project for the UVU class DGM 3790 Rich Internet Application Developmet 1

## List of Features

#### 1. Effectively use conditional logic and JavaScript array methods to render large lists

The main logic and JavaScript I'm using is in the Account component which is located in src/components/Account.vue. This is where I get data from the Firebase database to display the events the user has submited. I get an array of objects from the database and then I use the v-for in the v-expansion-panel to then loop through the array of objects and display the events for that user. 

#### 2. Encapsulate your code as VueJS single-file components.

If you look at all my components in src/components they are all .vue files that I then bring together in the src/routes.js file, and then I bring the routes into the src/App.vue component with the router-view on line 45.

#### 3. Work with the Vue-CLI to create and manage your project within a real development toolset.

I used the Vue-CLI to create this vue project, and you can see that I did by going into the package.json file and under devDependencies you can see multiple vue cli dependencies. 

#### 4. Properly use Git for your source version control with an established record of at least 4 days of commits each week from October 15th through December 6th.

I didn't do 4 days of commits every week, but I made up for some days in other weeks so it equaled out to 28 commits or more from October 15th to December 6th. 

#### 5. Allow communication between components using props, custom events, or local store.

I'm using props in the src/components/EventItem.vue component where I'm accepting props from data I'm getting in the src/components/Account.vue component. I am also communicating between the src/components/EditEmail.vue component and the src/components/Account.vue component with an $emit on line 56 of the EditEmail.vue component to update the email address in the Account component when the user changes his or her email address. All other data I'm using Vuex to pass to the components. 

#### 6. Present a form for user input that provides useful form validation and feedback.

I am using form validation on the src/components/Login.vue and Signup.vue components.

#### 7. Create a custom directive and use it on at least one of your components.

I am using a custom directive on the src/components/Account.vue component to make the background grey on every other item in the events table where I'm display event data for that user. 

#### 8. Use a mix of animations and transitions to enhance some aspects of your project.

In the App.vue component I put the router-view on line 45 inside a transition to have animation for all of my routes.

#### 9. Connect to a server using HTTP and display retrieved data (use vue-resource or Axios).

I am using http in the src/components/Plan.vue component in the created() method to create a new plan in the database. And then I am using http in the src/components/Account.vue component on line 110 to GET the event data from the database. 

#### 10. Provide at least 3 different routes with navigation between them using vue-router.

In the src/routes.js I have more than 3 routes, and I am using navigation between them using vue-router in the src/App.vue component.

#### 11. Manage your application's state using vuex.

In src/store.js I am using Vuex to have one main app state. Then I am storing user data in the Vuex state when the user logs in, and when the user goes to his or her account component I am storing their event data in the Vuex state as well. 

#### 12. Structure, document, and deploy your final project code according to common industry practices.

I organized and structured my app as best I could with the main.js, routes.js, store.js and App.vue in the src folder, all of the components in the components folder, and images in the assets folder. I deployed my app using Firebase which made it easy to just use the Firebase CLI to deploy it.
