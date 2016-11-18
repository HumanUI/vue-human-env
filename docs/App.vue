<template>
  <div id="app">
    <p>{{ $env.get('APP_NAME') }}</p>
    <p>{{ $env.get('APP.DEBUG') }}</p>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('When App component ready', this.$env.get('APP_DEBUG'))
    console.log('When App component ready', this.$env.get('APP.DEBUG'))
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}
</style>
