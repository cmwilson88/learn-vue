<template>
	<div>
    	<h1>The User Page</h1>
		<hr>
		<button class="btn btn-primary" @click="navigateToHome">Go To Home</button>
		<hr>
		<router-view></router-view>
	</div>
	
</template>

<script>
	export default {
		// data() {
		// 	return {
		// 		// access params from url
		// 		id: this.$route.params.id
		// 	}
		// },
		// // When we switch from one user component to the other, the params in the URL will change but since it's essentially the same component, VueJS will save resources and not reload the component.  To get around this, we add a watch method that examines the $route for changes in the URL and then takes in two arguments (to and from).  We grab the new param from the to argument and set this.id to to.params.id
		// watch: {
		// 	'$route': function(to, from) {
		// 		this.id = to.params.id
		// 	}
		// },
		methods: {
			navigateToHome() {
				// push pushes the route to the route stack
				// push can simply take the path or an object with more options
				this.$router.push({name: 'home'})
			}
		}
	}
</script>