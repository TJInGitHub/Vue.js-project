<template>
  <div id="app">
    <router-view></router-view> <!-- Renders the matched component for the current route -->
  </div>
</template>

<script>
export default {
  name: 'App', // Component name for debugging purposes
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; /* Font family for the app */
  text-align: center; /* Center align text in the app */
  color: #2c3e50; /* Text color */
  margin-top: 60px; /* Margin at the top of the app */
}
</style>
