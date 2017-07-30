import Vue from 'vue'
import App from './App.vue'

// global filter
Vue.filter('to-lowercase', function(value) {
	return value.toLowerCase()
})

// GLOBAL MIXIN - VERY SPECIAL USE CASE
Vue.mixin({
	created() {
		console.log('Global Mixin Created Hook');
	}
})

new Vue({
  el: '#app',
  render: h => h(App)
})
