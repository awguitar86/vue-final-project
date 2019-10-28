import Vue from 'vue';
import Vuex from 'vuex';
import Firebase from 'firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: null
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
        }
    },
    
    actions: {
        setUser: (context) => context.commit('SET_USER'),
        deleteUser: (context) => context.commit('DELETE_USER'),
        retrieveUser: (context) => context.commit('RETRIEVE_USER')
    },
    
    getters: {
        getUser: state => state.user,
        getUid: state => state.user ? state.user.uid : null
    },
});