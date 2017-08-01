import Home from './components/Home.vue';
import Header from './components/Header.vue';

// lazy loading syntax
const User = resolve => {
	// Whenever we want to load something that lives in the path...
	require.ensure(['./components/user/User.vue'], () => {
		// ...execute this function which is like resolving a promise
		resolve(require('./components/user/User.vue'));
	// pass another argument to create a subgroup of components to load at same time
	}, 'user');
}

const UserStart = resolve => {
	// Whenever we want to load something that lives in the path...
	require.ensure(['./components/user/UserStart.vue'], () => {
		// ...execute this function which is like resolving a promise
		resolve(require('./components/user/UserStart.vue'));
	}, 'user');
}

const UserDetail = resolve => {
	// Whenever we want to load something that lives in the path...
	require.ensure(['./components/user/UserDetail.vue'], () => {
		// ...execute this function which is like resolving a promise
		resolve(require('./components/user/UserDetail.vue'));
	}, 'user');
}

const UserEdit = resolve => {
	// Whenever we want to load something that lives in the path...
	require.ensure(['./components/user/UserEdit.vue'], () => {
		// ...execute this function which is like resolving a promise
		resolve(require('./components/user/UserEdit.vue'));
	}, 'user');
}

export const routes = [
	// nested routes
	{ 
		path: '/', 
		name: 'home', 
		components: { 
			default: Home,
			'header-top': Header
		} 
	},
	{ 
		path: '/user', 
		components: {
			default: User,
			'header-bottom': Header
		}, 
		children: [
			{ path: '', component: UserStart },
			// before enter for local guard on specific route
			{ path: ':id', component: UserDetail, beforeEnter: (to, from, next) =>  {
				console.log('inside route setup');
				next();
			} },
			// use name to clean up link router to attribute
			{ path: ':id/edit', component: UserEdit, name: 'userEdit' }
		] 
	},
	// redirect on specific route
	{ path: '/redirect-me', redirect: '/user' },
	// catch all redirect
	{ path: '*', redirect: '/' }
]