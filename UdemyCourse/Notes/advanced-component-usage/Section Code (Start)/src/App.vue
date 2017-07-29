<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
				<button @click="selectedComponent = 'appQuote'">Quote</button>
				<button @click="selectedComponent = 'appAuthor'">Author</button>
				<button @click="selectedComponent = 'appNew'">New</button>
               <hr>
               <p> {{ selectedComponent }}</p>
               <!-- Keep alives preserves the state of the component and stops it from being destroyed when we move to another part of the component -->
               <!-- However, we can't use destroyed() lifecycle method to react to the component being destroyed when we navigate away from it -->
               <keep-alive>
               <!-- component allows us to dynamically add components -->
               <!-- use :is to bind the data you want -->
	               <component :is="selectedComponent">
	               	<p>Default Content</p>
	               </component>
               	
               </keep-alive>

               <!-- <app-quote> -->
               		<!-- set content/data of each slot -->
               		<!-- <h2 slot="title">{{ quoteTitle }}</h2> -->
               		<!-- If slot is not named, all content with go in the next unnamed (or default slot) -->
               		<!-- <p>A Wonderful Quote</p> -->
               <!-- </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
	import Quote from './components/Quote.vue'
	import Author from './components/Author.vue'
	import New from './components/New.vue'
    export default {
    	data: function() {
    		return {
    			quoteTitle: 'The Quote',
    			selectedComponent: 'appQuote'
    		}
    	},
    	components: {
    		appQuote: Quote,
    		appAuthor: Author,
    		appNew: New
    	}    
    }
</script>

<style >
</style>
