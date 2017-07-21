new Vue({
	el: '#exercise',
	data: {
		name: 'Christopher Wilson',
		age: 28,
		image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
	},
	methods: {
		random: function() {
			return Math.random()
		}
	}
})