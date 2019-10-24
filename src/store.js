import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: null
    },
    
    mutations: {
        'SET_USER': state => state.user = Firebase.auth().currentUser,
        'DELETE_USER': state => state.user = null
    },
    
    actions: {
        setUser: (context) => context.commit('SET_USER'),
        deleteUser: (context) => context.commit('DELETE_USER')
    },
    
    getters: {
        getUser: state => state.user
    },
});