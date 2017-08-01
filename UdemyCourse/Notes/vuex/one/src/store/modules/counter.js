import * as types from '../types';

const state = {
	counter: 0,
}

const getters = {
	[types.DOUBLE_COUNTER](state) {
		return state.counter * 2
	},
	squareCounter(state) {
		return state.counter * state.counter
	},
	[types.CLICK_COUNTER](state) {
		return state.counter + ' clicks';
	}
}

const mutations = {
	increment(state, payload) {
		state.counter += payload;
	},
	decrement(state, payload) {
		state.counter-= payload;
	},
}

const actions = {
	increment(context, payload) {
		context.commit('increment', payload)
	},
	// using destructuring to get just the commit property from context
	decrement({commit}, payload) {
		commit('decrement', payload)
	},
	asyncIncrement({ commit }, payload) {
		setTimeout(()=>{
			commit('increment', payload.by)
		}, payload.duration)
	},
	// passing more than one argument in the payload
	asyncDecrement({ commit }, payload) {
		setTimeout(()=>{
			commit('decrement', payload.by)
		},payload.duration)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}