<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <AddName/>
  <Footer v-if="this.$store.state.IsShow"/>
</template>

<script>
import AddName from './components/AddName.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    AddName,
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
