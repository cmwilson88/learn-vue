new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
        	result: function() {
        		return this.value === 37 ? 'Done' : 'Not there Yet'
        	}

        },
        watch: {
        	result: function() {
        		let vm = this;
        		setTimeout(function(){
        			vm.value = 0;
        		}, 1000)
        	}
        }
    });