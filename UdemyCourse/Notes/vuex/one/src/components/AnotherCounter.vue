<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations, mapActions} from 'vuex'
    export default {
        methods: {
            // mapActions creates methods behind the scenes (increment, decrement) that calls the following:
            // this.$store.dispatch('increment')
            // It also has a second argument that it can be passed: by
            // so mapActions creates a methods for each function in the array and allows it to take in a second argument
            // increment(by) { return this.$store.dispatch('increment', by)}
            // increment(100) which is a payload in the store
            ...mapActions([
                'increment',
                'decrement'
            ])
            // increment() {
            //     //access store
            //     this.$store.commit('increment')
            // },
            // decrement() {
            //     this.$store.commit('decrement')
            // }
        }
    }
</script>