<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
			<list-item
				v-for="server in servers"
				:server="server">
			</list-item>
        </ul>
    </div>
</template>

<script>
	import ListItem from './ListItem.vue';
	export default {
		data: function() {
			return {
				servers: [
					{id:1, status: 'Normal'},
					{id:2, status: 'Failing'},
					{id:3, status: 'Unknown'},
					{id:4, status: 'Critical'},
					{id:5, status: 'Waiting...'},
					{id:6, status: 'Shut Down'},
					{id:7, status: 'Critical'}
				]
			}
		},
		components: {
			ListItem,
		},
		created() {
			let servers = this.servers
			setInterval(function() {
				let randomServer = Math.floor(Math.random() * 7) + 1;
				let selectedServer = servers.find(server => server.id === randomServer)
				//console.log(selectedServer)
				switch(selectedServer.status) {
					case('Normal'):
						selectedServer.status = 'Waiting...';
						break;
					case('Waiting...'):
						selectedServer.status = 'Unknown';
						break;
					case('Unknown'):
						selectedServer.status = 'Critical';
						break;
					case('Critical'):
						selectedServer.status = 'Failing';
						break;
					case('Failing'):
						selectedServer.status = 'Shut Down';
						break;
					default:
						return null

				}
			}, 500)
		}
	}
</script>

<style>

</style>
