<template>
	<div>
    	<p>Counter is: {{ doubleCounter }}</p>
		<p>Number of Clicks: {{ stringCounter }}</p>
	</div>
</template>

<script>
	//helper function
	import {mapGetters} from 'vuex';
	import * as types from '../store/types'
    export default {
        computed: {
        	//Tells JS to pull out all values from mapGetters and create key value pairs so we can write our own computer properties
        	...mapGetters({
        		doubleCounter: types.DOUBLE_COUNTER,
        		stringCounter: types.CLICK_COUNTER
        	})
        	// ourOwn() {}
        	// counter() {
        	// 	return this.$store.getters.doubleCounter
        	// },
        	// clicks() {
        	// 	return this.$store.getters.stringCounter
        	// }
        }
    }
</script>