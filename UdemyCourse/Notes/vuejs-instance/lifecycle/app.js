new Vue({
	el: '#app',
	data: {
		title: 'The VueJS Instance'
	},
	beforeCreate: function() {
		console.log('beforeCreate()');
	},
	created: function() {
		console.log('created()');
	},
	beforeMount: function() {
		console.log('beforeMount()')
	},
	mounted: function() {
		console.log('mounted()')
	},
	beforeUpdate: function() {
		console.log('beforeUpdate()')
	},
	updated: function() {
		console.log('updated()')
	},
	beforeDestroy: function() {
		console.log('beforeDestroy()')
	},
	destroyed: function() {
		console.log('destroyed()')
	},
	methods: {
		destroy: function() {
			this.$destroy();
		}
	}

})


// Lifecycle
// 1. New Vue 
	// Runs beforeCreate()
	// Initializes Data and Events
// calls created() = Instance Created
	// Compile template or derives template from 'el' or 'mount()'
	// beforeMount() - Called right before template is mounted to real DOM
	// replace el with compiled template
// Mounted to DOM
// Ongoing lifecycle
	// Data changed
	// beforeUpdate()
	// re-render DOM
	// updated()
// Mounted to DOM
// Ongoing lifecycle
	// beforeDestroy()
	// Destroyed
	// destroyed()
