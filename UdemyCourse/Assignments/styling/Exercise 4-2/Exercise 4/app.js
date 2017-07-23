new Vue({
  el: '#exercise',
  data: {
  	//#1
  	toggle: false,
  	//#2
  	spaceLetters: 'spaceLetters',
  	strike: 'strike',
  	//#3
  	userClass3: '',
  	//#4
  	userClass4: '',
  	userBool: false,
  	//#5
  	userStyle5: '',
  	//#6
  	progress: 'progress',
  	width: 0
  },
  computed: {
  	// #1
  	highlightShrink: function() {
  		return {
  			highlight: this.toggle,
  			shrink: !this.toggle
  		}
  	},
  	// #4
  	applyStyling: function() {
  		return {
  			backgroundColor: this.userStyle5
  		}
  	},
  	// #6 
  	progressBar: function() {
  		return {
  			width: this.width + '%'
  		}
  	}
  },
  methods: {
  	// #1
    startEffect: function() {
    	let vm = this;
    	setInterval(function(){
    		vm.toggle = !vm.toggle;
    	}, 500)
    },
    //#6
    startProgress: function() {
    	let vm = this;
    	setInterval(function() {
    		if(vm.width < 100) {
    			vm.width += 5
    		} else {
    			return null;
    		}
    	}, 500)
    }
  }
});
