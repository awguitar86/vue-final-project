import Vue from 'vue';
import Vuex from 'vuex';
import eventPlan from './modules/eventPlan';

// import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    // actions,
    modules: {
        eventPlan
    }
});