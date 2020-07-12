<template>
  <v-container>
    <v-row>
      <v-col lg="3"></v-col>
      <v-col lg="6">
        <div class="white elevation-2">
          <v-toolbar flat dense dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <div class="px-4 py-2">
            <v-text-field label="Email" placeholder="Email..." name="email" v-model="email"></v-text-field>
            <br>
            <v-text-field type="password" name="password" placeholder="Password..." label="Password" v-model="password"></v-text-field>
            <br>
            <div v-html="error"></div>
            <br>
            <v-btn class="cyan" @click="register">Sign Up</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
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
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
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
