<template>
	<div>
	    <div class="form-group">                    
	        <label for="first_name">First Name: </label>
	        <input 
	            type="text"
	            :value="firstName"
	            @input="changeName(true, $event)">
	    </div>
	    <div class="form-group">
	        <label for="last_name">Last Name: </label>
	        <input 
	            type="text"
	            :value="lastName"
	            @input="changeName(false, $event)">
	    </div>
	</div>
</template>
<script>
	export default {
		props: ['value'],
		methods: {
			changeName(isFirst, event) {
				let name = '';
				if(isFirst) {
					name = event.target.value + ' ' + this.lastName;
				} else {
					name = this.firstName + ' ' + event.target.value;
				}
				this.value = name;
				this.$emit('input', this.value);
			}
		},
		computed: {
			firstName() {
				return this.value.split(" ")[0]
			},
			lastName() {
				return this.value.split(" ")[1]
			}
		}
	}
</script>
<style>
	
</style>