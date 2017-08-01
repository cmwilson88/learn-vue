<template>
	<div>
    	<h3>Edit the User</h3>
		<p>Locale: {{ $route.query.locale }}</p>
		<p>Analytics: {{ $route.query.q }}</p>
		<hr>
		<!-- guarding routes -->
		<button class="btn btn-primary" @click="confirmed = true">Confirm</button>
		

		<div style="height: 1000px"></div>
		<p id="data">Some extra data</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				confirmed: false
			}
		},
		// only place we can check this.  global is too late
		beforeRouteLeave(to, from, next) {
			if(this.confirmed) {
				next();
			} else {
				if(confirm('Are you sure?')) {
					next();
				} else {
					next(false);
				}
			}
		}
	}
</script>