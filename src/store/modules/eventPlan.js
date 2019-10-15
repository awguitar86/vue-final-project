const state = {
    eventPlan: []
};

const mutations = {
    'SET_EVENT_PLAN'(state, plan) {
        state.eventPlan = plan;
    }
};

const actions = {
    addEvent: ({commit}, plan) => {
        commit('SET_EVENT_PLAN', plan);
    }
};

const getters = {
    plan: state => {
        return state.eventPlan;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};