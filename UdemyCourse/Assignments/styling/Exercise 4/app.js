new Vue({
  el: '#exercise',
  data: {
  	isHighlight: true,
  	greenFont: 'greenFont',
  	userAdded: '',
  	userBool: '',
  	userClass4: '',
  	userStyle5: '',
  	progressWidth: 0
  },
  computed: {
  	toggleHighlight: function() {
  		return {
  			highlight: this.isHighlight,
  			shrink: !this.isHighlight
  		}
  	},
  	questionFive: function() {
  		return {
  			backgroundColor: this.userStyle5
  		}
  	},
  	progressBar: function() {
  		return {
  			width: this.progressWidth + 'px'
  		}
  	}
  },
  methods: {
    startEffect: function() {
    	let vm =  this;
    	setInterval(function(){
    		vm.isHighlight = !vm.isHighlight;
    	},500)
    },
    startProgress: function() {
    	let vm = this;
    	setInterval(function() {
    		vm.progressWidth += 10;
    	}, 500)
    }
  }
});
