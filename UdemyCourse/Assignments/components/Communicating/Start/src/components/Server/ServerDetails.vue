<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details are currently not updated</p>
        <div v-else>
        	<p>Server: {{server.id}}</p>
        	<p>Status: {{server.status}}</p>
        	<button @click="server.status = 'Normal'">Normal</button>
        	<button @click="server.status = 'Critical'">Critical</button>
        	<button @click="server.status = 'Failing'">Failing</button>
        	<button @click="server.status = 'Unknown'">Unknown</button>
        	<button @click="server.status = 'Waiting...'">Waiting</button>
        	<button @click="server.status = 'Shut Down'">Shut Down</button>
        </div>
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
		created() {
			eventBus.$on('ServerWasSent', server => {
				this.server = server
			});
		}
	} 
</script>
