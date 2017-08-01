<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <!-- Using dynamic names and attributes -->
                <select name="" id="" v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">slide</option>
                </select>
                <br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <!-- SPECIAL VUEJS ELEMENT -->
                <!-- Can only transition one child component and show it -->
                <!-- Can have multiple child components but must alternate between them -->
                <!-- :name for grabbing dynamic values -->
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <!-- type: set VueJS to know which of the animation/transition timing to use when remove element from the DOM -->
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <!-- appear applies the animation/transition on the INITIAL attachment to the DOM -->
                <transition name="fade" appear>
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <!-- specifying which classes to use instead of Vue defaults (using Animate CSS library) -->
                <!-- Can use all four configuration options -->
                <transition 
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                    >
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>

                <!-- toggling animation between two divs -->
                <!-- mode: "out-in" let the old element animate out first and then animate the new one in -->
                <!-- mode: "in-out" does the opposite -->
                <transition :name="alertAnimation" mode ="out-in">
                    <!-- need a unique key for each element so that vue knows which element to grab to apply animation -->
                    <div class="alert alert-info" v-if="show" key="1">This is some Info</div>
                    <div class="alert alert-warning" v-if="!show" key="2">This is some Warning</div>
                </transition>

                <hr>
                <h1>JavaScript Animations</h1>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br><br>
                <!-- :css = false tells VueJS to not look for CSS classes since we're not using them -->
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false">
                    <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
                </transition>
                <hr>
                <br><br>
                <h1>Animations with Dynamic Components</h1>
                    <button 
                        class="btn btn-primary"
                        @click="selectedComponent === 'app-success' ? selectedComponent = 'app-danger' : selectedComponent = 'app-success'">Toggle Components</button>
                <br><br>
                <!-- dynamic components -->
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <br><br>
                <h1>Using Transition Group to animate lists </h1>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br><br>
                <ul class="list-group">
                    <transition-group 
                        name="slide">
                        <li 
                            class="list-group-item" 
                            v-for="(number, index) in numbers" 
                            @click="removeItem(index)"
                            style="cursor: pointer"
                            :key="number">{{number}}</li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlertComponent from './DangerAlertComponent.vue'
    import SuccessAlertComponent from './SuccessAlertComponent.vue'
    export default {
        data() {
            return {
                show: false,
                load: true,
                alertAnimation: 'fade',
                elementWidth: 100,
                selectedComponent: 'app-success',
                numbers: [1,2,3,4,5,6]
            }
        },
        components: {
            appDanger: DangerAlertComponent,
            appSuccess: SuccessAlertComponent
        },
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter')
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log('enter')
                // done is needed to tell VueJS when the animation finishes
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20)
            },
            afterEnter(el) {
                console.log('afterEnter')
            },
            enterCancelled(el) {
                console.log('enterCancelled')
            },

            beforeLeave(el) {
                console.log('beforeLeave')
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log('leave')
                // done is needed to tell VueJS when the animation finishes
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval)
                        done();
                    }
                }, 20)
            },
            afterLeave(el) {
                console.log('afterLeave')
            },
            leaveCancelled(el) {
                console.log('leaveCancelled')
            },


            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length+1)
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
            }
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
        /*opacity: 1;*/
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        /*transform: translateY(20px);*/
        /*We've already set this up in keyframes*/

        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {
        /*transform: translateY(0);*/
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }
    /* attached to any element that needs to change its place */
    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
