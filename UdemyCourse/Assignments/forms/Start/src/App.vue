<template>
    <div class="container">
        <div v-if="!isSubmitted">
            <form>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <!-- Exercise 1 -->
                        <!-- Create a Signup Form where you retrieve the following Information -->
                        <!-- Full Name (First Name + Last Name) -->
                        <!-- Mail -->
                        <!-- Password -->
                        <!-- Store Data? Yes/No -->
<!--                         <div class="form-group">                    
                            <label for="first_name">First Name: </label>
                            <input 
                                type="text"
                                v-model.trim="userData.firstName">
                        </div>
                        <div class="form-group">
                            <label for="last_name">Last Name: </label>
                            <input 
                                type="text"
                                v-model.trim="userData.lastName">
                        </div> -->
                        <app-name-input v-model="userData.fullName"></app-name-input>
                        <div class="form-group">
                            <label for="email">Mail: </label>
                            <input 
                                type="email"
                                v-model.trim="userData.mail">
                        </div>
                        <div class="form-group">
                            <label for="password">Password: </label>
                            <input 
                                type="password"
                                v-model.trim.lazy="userData.password">
                        </div>
                        <div class="form-group">
                        <label for="">Store in Database? </label>
                            <label for="storeInDatabase">
                                <!-- Vue JS now konws that both gender buttons belong to the same group and will limit selecting more than one. -->
                                <!-- Vue JS automatically stores the VALUE of the radio button when selected -->
                                <input
                                    type="radio"
                                    id="storeInDatabase"
                                    value="true"
                                    v-model="isStored"> Yes
                            </label>
                            <label for="doNotStore">
                                <input
                                    type="radio"
                                    id="doNotStore"
                                    value="false"
                                    v-model="isStored"> No
                           </label>
                        </div>
                        
                        <hr>
                        <div class="row">
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <button
                                        class="btn btn-primary"
                                        @click.prevent="submitted">Submit!
                                </button>
                            </div>
                        </div>

                        <!-- Exercise 2 -->
                        <!-- Only display the Form if it has NOT been submitted -->
                        <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                        <!-- Exercise 3 -->
                        <!-- Edit the Example from above and create a custom "Full Name" Control -->
                        <!-- which still holds the First Name and Last Name Input Field -->
                    </div>
                </div>
            </form>
            <hr>
        </div>
        <div class="row" v-else>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }} </p>
                        <p>Mail: {{ userData.mail }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ isStored ? 'Yes' : 'No'}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NameInput from './NameInput.vue';
    export default {
        data() {
            return {
                userData: {
                    // firstName: 'Default',
                    // lastName: 'Value',
                    fullName: 'Christopher Wilson', 
                    mail: '',
                    password: ''
                },
                isStored: false,
                isSubmitted: false
            }
        },
        components: {
            appNameInput: NameInput
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            }
        }
    }
</script>

<style>
</style>
