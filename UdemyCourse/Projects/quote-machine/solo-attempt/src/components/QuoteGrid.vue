<template>
	<div class="quote_grid">
		<div v-for="(quote, index) in quoteArray" :key="quote.id" @click="deleteTodo(index)" class="quote">
			{{quote.content}}
		</div>
	</div>
</template>

<script>
	import {eventBus} from '../main.js';
	export default {
		data: function() {
			return {
				quoteArray: [{id: 1, content: 'Just a Quote to start with something!'}]
			}
		},
		methods: {
			deleteTodo: function(index) {
				console.log(index)
				let arrCopy = this.quoteArray.filter((quote, i) => i != index)
				this.quoteArray = [...arrCopy]
				eventBus.$emit('lengthWasUpdated', this.quoteArray.length)
			}
		},
		created() {
			eventBus.$on('quoteWasAdded', quote => {
				let length = this.quoteArray.length
				if(length > 9) {
					alert("Please delete a todo before adding more")
				} else {
					this.quoteArray = [...this.quoteArray, {id: length+1, content: quote}]
					eventBus.$emit('lengthWasUpdated', this.quoteArray.length)
				}
			})
		}
	}
</script>

<style>
	.quote_grid {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.quote {
		display: flex;
		align-items: center;
		
		max-width: 25%;
		padding: 15px;
		margin: 10px 5px;
		border: 1px solid #333;
		border-radius: 5px;
	}

	.quote:hover {
		background-color: lightcoral;
	}
</style>