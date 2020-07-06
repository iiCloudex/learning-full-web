<template>
  <div>
    <h1>Register</h1>
    <div class="container">
      <div class="row">
        <div class="mx-auto col-sm-4">
          <input class="form-control" type="email" name="email" placeholder="Email..." v-model="email"/>
          <input class="form-control mt-2" type="password" name="password" placeholder="Password..." v-model="password"/>
          <div class="text-danger" v-html="error"></div>
          <button class="btn btn-primary mt-2" @click="register">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
