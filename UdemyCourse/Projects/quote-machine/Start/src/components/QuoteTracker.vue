<template>
	<div class="quote_tracker">
		<h1>Quotes Added</h1>
		<div class="progress_bar"><div class="progress" :style="{width: width + '%'}">{{width/10}}/10</div></div>
	</div>
</template>

<script>
	import {eventBus} from '../main.js';
	export default {
		data: function() {
			return {
				width: 10 
			}
		},
		created() {
			eventBus.$on('lengthWasUpdated', length=> this.width = length * 10)
		} 
	}
</script>

<style>
	.quote_tracker {
		width: 100%;
	}

	.progress_bar {
		width: 100%;
		height: 35px;
		background-color: #ccc;

		box-shadow: inset 1px #000;
	}

	.progress {
		display: flex;
		justify-content: center;
		align-items: center;
		
		transition: 500ms;
		height: 100%;

		color: #fff;
		background-color: #0045ff;
	}
</style>