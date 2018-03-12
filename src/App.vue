<template>
  <div id="app">
    <h1>My Calculator App</h1>
    <calculator></calculator>
  </div>
</template>

<script>
import calculator from './components/calculator'

export default {
  name: 'App',
  components: {
    calculator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 600px;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}
</style>
