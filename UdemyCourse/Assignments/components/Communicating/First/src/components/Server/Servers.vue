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
	import ListItem from './ListItem.vue'
	import { eventBus } from '../../main.js'
	export default {
		data: function() {
			return {
				servers: [
					{id: 1, status: 'Normal'},
					{id: 2, status: 'Critical'},
					{id: 3, status: 'Unknown'},
					{id: 4, status: 'Normal'}
				]
			}
		},
		components: {
			ListItem,
		}
	}
</script>

<style>

</style>
