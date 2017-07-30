<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built In Directives</h1>
                <!-- Places text within the element -->
				<p v-text="'Some Text'"></p>
				<!-- Places html element on the DOM.  Need to sanitize it -->
				<p v-html="'<strong>Strong Text</strong>'"></p>
        	</div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <!-- v-highlight is globally registered -->
                <!-- pass value -->
				<p v-highlight="'yellow'">Color this</p> 
				<!-- pass argument -->
				<p v-highlight:background="'green'">argument, background</p>
				<p v-highlight="'green'">Argument, default</p>
				<!-- pass modifier -->
				<!-- Can chain multiple modifiers -->
				<p v-highlight:background.delayed="'red'">Modifier Delayed</p>
				<p v-highlight:background="'red'">No modifier</p>
        		
        		<!-- local directives -->
        		<p v-local-highlight:background.delayed="{mainColor: 'lightcoral'}">Local Directive, Modifier, Delayed</p>
        		<p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Local Directive, Modifier, Blink, Delayed</p>

        	</div>
        </div>
    </div>
</template>

<script>
    export default {
    	// Register local directive
    	directives: {
    		'local-highlight': {
    			bind(el, binding, vnode) {
    				let delay = 0;
					if(binding.modifiers['delayed']) {
						delay = 3000;
					}
					if(binding.modifiers['blink']) {
						let mainColor = binding.value.mainColor;
						let secondColor = binding.value.secondColor;
						let currentColor = mainColor;
						setTimeout(() => {
							setInterval(() => {
								// Blinking color
								currentColor === secondColor ? currentColor = mainColor : currentColor = secondColor
								// binding.arg gets info after the colon (argument)
								if (binding.arg === 'background') {
									// change background if background is chained
									el.style.backgroundColor = currentColor
								} else {
									el.style.color = currentColor
								}	
							}, binding.value.delay)
						}, delay);			
					} else {
						setTimeout(() => {
							// binding.arg gets info after the colon (argument)
							if (binding.arg === 'background') {
								el.style.backgroundColor = binding.value.mainColor
							} else {
								el.style.color = binding.value.mainColor
							}	
						}, delay);			
					}
    			}
    		}
    	}
    }
</script>

<style>

</style>
