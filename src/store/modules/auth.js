import Firebase from 'firebase';

const state = {
    user: null
};

const mutations = {
    'SET_USER': state => state.user = Firebase.auth().currentUser,
    'DELETE_USER': state => state.user = null
};  

const actions = {
    setUser: (context) => context.commit('SET_USER'),
    deleteUser: (context) => context.commit('DELETE_USER')
};

const getters = {
    getUser: state => state.user
};

export default {
    state,
    mutations,
    actions,
    getters
};