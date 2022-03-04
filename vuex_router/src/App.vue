<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">App</router-link> | 
      <router-link to="/home" class="nav-link">Home</router-link> | 
      <router-link to="/Contact" class="nav-link">Contact</router-link>
    </nav><br>
    <div class="container mt-3">
      <router-view />
    </div>
    <br>
  </div>
  <Footer v-if="this.$store.state.IsShow"/>
</template>

<script>
import Footer from './components/views/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
