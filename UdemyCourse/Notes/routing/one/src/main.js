import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import { routes } from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: routes,
	// no hashtag style
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if(savedPosition) {
			return savedPosition
		}
		if(to.hash) {
			return { selector: to.hash }
		} 
		return {x: 0, y:1000}
	}
});

// execute this before each routing action
// May use this for only very generic checks
// gets executed all the time
router.beforeEach((to, from, next) => {
	console.log('Global beforeEach')
	// must call next so it knows to go
	// next(false) will abort the operation
	// next({}) can define a path similar to .push()
	next();
})	

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
