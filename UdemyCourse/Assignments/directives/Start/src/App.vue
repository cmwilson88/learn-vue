<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div v-change-text:click="changeText">{{ sample }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sample: 'Sample Text'
            }
        },
        directives: {
            'change-text': {
                bind(el, binding) {
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn)
                }
            }
        },
        methods: {
            changeText() {
                this.sample = "WE CHANGED ON CLICK"
            }
        }
    }
</script>

<style>
</style>
