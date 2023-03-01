<template>
    <div class="d-flex align-center justify-center" style="height: 80vh">
        <v-sheet width="400" class="mx-auto">
            <v-form fast-fail @submit.prevent="login">
                <v-text-field 
                    v-model="v$.form.email.$model" 
                    label="Email"
                    :error-messages="v$.form.email.$errors.map(e => e.$message)"
                ></v-text-field>
                
                <v-text-field
                    v-model="v$.form.password.$model"
                    label="Password"
                    type="password"
                    :error-messages="v$.form.password.$errors.map(e => e.$message)"
                ></v-text-field>
                
                <v-btn type="submit" color="primary" block class="mt-2" :disabled="v$.form.$invalid">Sign in</v-btn>

            </v-form>
        </v-sheet>
    </div>   
  </template>
  
<script>
    import { useVuelidate } from '@vuelidate/core'
    import { required, email, minLength } from '@vuelidate/validators'
    export default {
        setup () {
            return { v$: useVuelidate() }
        },
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            };
        },
        validations () {
            return {
                form: {
                    email: { required, email },
                    password: { required, minLength: minLength(6) }
                }
            }
        },
        methods: {
            login() {
                localStorage.setItem('isAuth', true);
                this.$router.push({name: 'Products'});
            },
        },
    }
</script>
  