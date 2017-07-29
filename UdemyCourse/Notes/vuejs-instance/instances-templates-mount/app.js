
// Can save Vue instances into variables
// vm = view model
let vm1 = new Vue({
	el: '#app1',
	data: {
		title: 'The VueJS Instance',
		showParagraph: false
	},
	methods: {
		show: function() {
			this.showParagraph = true;
			this.updateTitle('The VueJS Instance (Udpated)')
		},
		updateTitle: function(title) {
			this.title = title;
		}
	},
	computed: {
		lowercaseTitle: function() {
			return this.title.toLowerCase();
		}
	},
	watch: {
		title: function(value) {
			alert('Title changed, new value: ' + value);
		}
	}
})

// Access first Vue from regular javascript
setTimeout(function(){
	vm1.title = 'Changed by Timer';
}, 3000);


let vm2 = new Vue({
	el: '#app2',
	data: {
		title: 'The second Instance'
	},
	methods: {
		// Accessing first Vue instance from outside
		// Typically if we want to do this, it makes more sense
		// to just make it all one Vue instance since they are connected
		onChange: function() {
			vm1.title = 'Changed!'
		}
	}
})

// Using Vue template to add HTML to the DOM
// This only applies to first isntance of 'hello' element
// Need to use component to apply to every instance of hello element
var vm3 = new Vue({
	el: 'hello',
	template: '<h1>Hello!</h1>'
})

// Mount to DOM isntead of using el key
///// vm3.$mount('#app3');