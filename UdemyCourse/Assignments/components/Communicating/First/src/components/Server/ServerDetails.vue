<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details are currently not updated</p>
    	<p v-else>{{ server.id }} | {{ server.status }}</p>
    	<button @click="resetStatus">Reset Status</button>
    </div>

</template>

<script>
	import {eventBus} from '../../main.js';
	export default {
		data: function() {
			return {
				server: null
			}
		},
		methods: {
			resetStatus() {
				this.server.status = 'Normal'
			}
		},
		created() {
			eventBus.$on('serverWasSent', (server) => {
				console.log('Sent server ' + server)
				this.server = server
			})
		}
	}
</script>

<style>

</style>
