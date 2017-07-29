// Vue.component('target-element', Vue object)
// Cheating by using data variable that is an object
// but method on the vue component will change data in both instances because it is poniting to same data object

//var data = {status: 'Critical'}

// Vue.component registers the component globally
// var cmp = {blahblah} sets the component to be local
var cmp = {
	
	data: function() {
		return {
			status: 'Critical'
		}
	},
	template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
	methods: {
		changeStatus: function() {
			this.status = 'Normal'
		}
	},
};

new Vue({
	el: '#app',
	// allows us to use local components
	components: {
		'my-cmp': cmp
	}
})

new Vue({
	el: '#app2',
	components: {
		'my-cmp': cmp
	}
})