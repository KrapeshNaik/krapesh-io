<template>
    <div class="animated flipInX" id="app">
        <hello></hello>
    </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
    name: 'app',
    components: {
        Hello
    }
}
</script>

<style>
html {
    height: 100%;
    width: 100%;
}

body {
    min-height: 100%;
    max-width: 100%;
    background-color: #f5f5d9;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.41);
    margin: 2em;
    text-align: center;
    color: #2c3e50;
}
</style>