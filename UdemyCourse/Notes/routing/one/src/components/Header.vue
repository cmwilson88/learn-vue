<template>
	<ul class="nav nav-pills">
		<!-- tag="li" makes the router-link element a list item when rendered -->
		<!-- Using exact in this case to stop from active-class="active" from staying on Home -->
		<router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
		<router-link to="/user" tag="li" active-class="active"><a>Users</a></router-link>

	</ul>
</template>