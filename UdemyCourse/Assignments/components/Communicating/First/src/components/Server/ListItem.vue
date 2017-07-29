<template>
	<li
		class="list-group-item"
		@click="sendServer"
		>
		Server #{{ server.id }}
	</li>
</template>

<script>
	import {eventBus} from '../../main.js'
	export default {
		props: ['server'],
		methods: {
			sendServer() {
				eventBus.$emit('serverWasSent', this.server)
			}
		}
	}
</script>