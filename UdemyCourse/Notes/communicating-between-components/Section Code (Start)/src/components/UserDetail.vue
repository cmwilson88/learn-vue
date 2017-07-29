<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge}}</p>
        <button @click="resetName">Reset Name</button>
        <!-- Pass function down through props, alternative to using custom event -->
        <button @click="resetFn()">Reset Name</button>

    </div>
</template>

<script>
	import {eventBus} from '../main.js';
	export default {
		props: { // take in props
			name: { // Prop validation
				type: String,
				// default: 'Max' // Set default value if the prop was not passed in
				required: true // Make prop required 
			},
			resetFn: Function,
			userAge: Number
		},
		methods: {
			switchName() {
				return this.name.split("").reverse().join("");
			},
			resetName() {
				this.name = 'Wilson';
				this.$emit('nameWasReset', this.name); // emit a custom event, name it whatever and bind to listener in parent
			}
		},
		created() {
			eventBus.$on('ageWasEdited', (age) => {
				this.userAge = age
			});
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
