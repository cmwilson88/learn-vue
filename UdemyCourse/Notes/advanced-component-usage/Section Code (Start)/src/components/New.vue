<template>
	<div>
		<h3>New Quote</h3>
		<!-- component is created and destroyed any time it's active -->
		<button @click="counter++">Increase</button>
		<p>{{counter}}</p>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				counter: 0
			}
		},
		destroyed() {
			console.log('Destroyed')
		},
		// When moving away from component
		deactivated() {
			console.log('deactviated')
		},
		activated() {
			console.log('activated')
		}
	}
</script>

<style scoped>

</style>