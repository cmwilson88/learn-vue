import Vue from 'vue'
import App from './App.vue'


// Can register custom directive globally
// directive('nameofdirective')

// Directives have FIVE HOOK
// 1. bind hook - fired as soon as directive is attached
	// bind(el, binding, vnode)
// 2. inserted - fire as soon as inserted into Parent Node
	// inserted(el, binding, vnode)
// 3. update - Called whenever component is updated (without children)
	// update(el, binding, vnode, oldVnode)
// 4. componentUpdated - Called whenever component is updated and children
	// componentUpdated(el, binding, vnode, oldVnode)
// 5. unbind - Once directive is removed
	// unbind(el, binding, vnode)

// bind and update are the most common

Vue.directive('highlight', {
	bind(el, binding, vnode) {
		//el.style.backgroundColor = 'green';
		
		// v-highlight=" 'binding.value' "
		//el.style.backgroundColor = binding.value;
		
		// Set delay modifier
		var delay = 0;
		if(binding.modifiers['delayed']) {
			delay = 3000;
		}
		setTimeout(() => {
			// binding.arg gets info after the colon (argument)
			if (binding.arg === 'background') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}	
		}, delay);


	}
});


new Vue({
  el: '#app',
  render: h => h(App)
})
