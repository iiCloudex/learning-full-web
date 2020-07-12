<template>
  <v-app-bar absolute dark dense elevate-on-scroll>
      <v-toolbar-title @click="navigateTo({name: 'HelloWorld'})" style="cursor: pointer">Learning Full Web</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat dark @click="navigateTo({name: 'Register'})">Sign Up</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
</style>
