import Vue from 'vue';
import Vuex from 'vuex';
import Firebase from 'firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: null,
        eventPlan: null
    },
    
    mutations: {
        'SET_USER': state => state.user = Firebase.auth().currentUser,
        'DELETE_USER': state => state.user = null,
        'RETRIEVE_USER' : (state) => {
            Firebase.auth().onAuthStateChanged((user) => {
                if(user === null) {
                    state.user = null
                } else {
                    state.user = user
                }
            })
        },
        'SET_EVENT_PLAN': (state, plan) => state.eventPlan = plan,
        'DELETE_EVENT_PLAN': state => state.eventPlan = null
    },
    
    actions: {
        setUser: ({commit}) => commit('SET_USER'),
        deleteUser: ({commit}) => commit('DELETE_USER'),
        retrieveUser: ({commit}) => commit('RETRIEVE_USER'),
        setEventPlan: ({commit}, plan) => commit('SET_EVENT_PLAN', plan),
        deleteEventPlan: ({commit}) => commit('DELETE_EVENT_PLAN')
    },
    
    getters: {
        getUser: state => state.user,
        getUid: state => state.user ? state.user.uid : null,
        getEventPlan: state => state.eventPlan
    },
});