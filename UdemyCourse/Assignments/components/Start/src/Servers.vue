<template>
	<div>
        <li
          class="list-group-item"
          v-for="index in 5">
            Server #{{ index }}
        </li>
	</div>
</template>

<style scoped>
	div {
		border: 1px solid red;
	}
</style>