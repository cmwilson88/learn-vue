<template>
	<li
      class="list-group-item"
      @click="server.status = 'Normal'"
      :class="{'normal': server.status === 'Normal',
      			'unknown': server.status === 'Unknown',
      			'critical': server.status === 'Critical',
      			'shutdown': server.status === 'Shut Down',
      			'waiting': server.status === 'Waiting...',
      			'failing': server.status === 'Failing'}">
    	Server #{{ server.id }} | {{server.status}}
    </li>
</template>

<script>
	import {eventBus} from '../../main.js';
	export default {
		props: ['server'],
		methods: {
			sendServer() {
				console.log('ServerWasSent');
				eventBus.$emit('ServerWasSent', this.server);
			}
		}
	}
</script>

<style scoped>
	.list-group-item {
		color: #fff;
	}

	.normal {
		background-color: green;
	}

	.critical {
		background-color: lightcoral;
	}

	.shutdown {
		background-color: #000;
	}

	.waiting {
		background-color: orange;
	}

	.unknown {
		background-color: #555;
	}

	.failing {
		background-color: red;
	}
</style>