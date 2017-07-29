<template>
	<div>
		<div class="title">
			<!-- using multiple slots -->
			<slot name="title"></slot>	
			<!-- Content in unnamed slot that does not have data passed from parent, can set default using content between tags -->
			<span style="color: #ccc"><slot name="subtitle">The subtitle</slot></span>
		</div>
		<hr>
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style scoped>
	div {
		border: 1px solid #ccc;
		box-shadow: 1px 1px 2px black;
		padding: 20px;
		margin: 30px auto;
		text-align: center;
	}

	h2 {
		color: red;
	}

	.title {
		font-style: italic;
	}
</style>