<template>
    <div class="container">
    	<quote-tracker></quote-tracker>
    	<quote-input></quote-input>
    	<quote-grid></quote-grid>
    	<quote-info></quote-info>
    </div>
</template>

<script>
	import QuoteTracker from './components/QuoteTracker.vue';
	import QuoteInput from './components/QuoteInput.vue';
	import QuoteGrid from './components/QuoteGrid.vue';
	import QuoteInfo from './components/QuoteInfo.vue';
    export default {
    	components: {
    		QuoteTracker,
    		QuoteInput,
    		QuoteGrid,
    		QuoteInfo
    	}
    }
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;

		height: 100vh;
		width: 80vw;
	}

</style>
