<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h1>First Exercise</h1>
                <p>{{ firstText | reverseText }}</p>
                <hr>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h1>Second Exercise</h1>
                <p>{{ secondText | count-length }}</p>
                <p>{{ "test" | count-length }}</p>
                <hr>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h1>Third Exercise</h1>
                <p>{{ oneText }}</p>
                <p>{{ twoText }}</p>
                <hr>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import {exerciseMixin} from './exerciseMixin.js'
    export default {
        mixins: [exerciseMixin]
    }
</script>

<style>
    .increaseFontSize: {
        font-size: 2em;
    }
</style>
