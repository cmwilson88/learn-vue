import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
	// has to be named state for Vuex to detect it
	// Store all data properties for the app
	state: {
		value: 0
	},
	//Add getters to reuse calculation and not duplicate codes
	getters,
	// Mutations have to be synchronous (so no setTimeout) or http requests because we want to track state and changes immediately
	mutations,
	// run async mutations
	actions,
	// import our modularized vuex document
	modules: {
		counter
	}
})