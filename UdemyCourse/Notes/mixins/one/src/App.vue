<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- | is pipe syntax.  Passes value on left as the value to the filter on the right side -->
                <!-- Chain filters by adding another pipe, which works left to right.  So regular text, then uppercase, then lowercase -->
                <!-- Filters change what the users see but does not manipulate the data in our object -->
                <p>{{ text | to-uppercase | to-lowercase}}</p>
				<hr>
				<!-- an often-times  better way to filter -->
				<!-- computed properties - vueJS knows on which property it depends and only recalcuates when it changes -->
				<input type="text" v-model="filterText">
				<!-- Will only manipulate the data in the first list.  It's not a shared piece of memory but each time the mixin is rendered, it is a fresh copy of the data object -->
				<button @click="fruits.push('Berries')">Add New Item</button>
				<ul>
					<li v-for="fruit in filteredFruits">{{ fruit }}</li>
				</ul>
				<hr>
				<app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
	import List from './List.vue'
	import {fruitMixin} from './fruitMixin.js'
    export default {
    	data() {
    		return {
    			text: 'Hello There',
    		}
    	},
    	// local register
    	filters:{
    		'to-uppercase'(value) {
    			return value.toUpperCase();
    		}
    	},
    	components: {
    		appList: List
    	},
    	mixins: [fruitMixin]
    }
</script>

<style>

</style>
