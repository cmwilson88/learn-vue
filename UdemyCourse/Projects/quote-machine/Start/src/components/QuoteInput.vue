<template>
	<div class="quote_input">
		<h3>Quote</h3>
		<textarea v-model="userInput" name="new_quote"></textarea>
		<div @click="this.addQuote" class="add_quote_btn">Add Quote</div>
	</div>
</template>

<script>
	import {eventBus} from '../main.js';
	export default {
		data: function() {
			return {
				userInput: ''
			}
		},
		methods: {
			addQuote: function() {
				if(!this.userInput) {
					alert("Please enter quote")
				} else {
					this.quoteWasAdded();
					this.userInput = ''
				}
			},
			quoteWasAdded: function() {
				eventBus.$emit('quoteWasAdded', this.userInput);
			}
		},

	}
</script>

<style>
	.quote_input {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
	}

	.add_quote_btn {
		display: flex;
		justify-content: center;
		align-items: center;

		font-weight: 700;
		width: 250px;
		margin: 20px auto;
		padding: 10px 25px;

		color: #fff;
		background-color: #0045ff;
	}

	textarea {
		width: 40%;
	}

	h3 {
		text-align: left;
	}
</style>