<template>
	<div>
    	<h3>Some User Details</h3>
		<p>User loaded has ID: {{ $route.params.id }}</p>
		<!--  -->
		<router-link
			:to="link" 
			tag="button" 
			class="btn btn-primary">Edit User</router-link>	
	</div>
</template>


<script>
	export default {
		data() {
			return {
				link: { 
					name: 'userEdit', 
					params: { id: this.$route.params.id }, 
					query: {locale: 'en', q: '100'}, 
					// passing hash fragment to scroll to certain spot on page on load
					hash: '#data'
				}
			}
		},
		// check if user is allowed to enter somewhere
		beforeRouteEnter(to, from, next) {
			
			//check authentication or something
			if(true) {
				next();
			} else {
				next(false);
			}
		}
	}
</script>