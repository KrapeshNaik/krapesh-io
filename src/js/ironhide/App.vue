<template>
    <div>
        <div class="pure-menu pure-menu-horizontal">
            <a href="#" class="pure-menu-heading pure-menu-link">BRAND</a>
            <ul class="pure-menu-list">
                <li class="pure-menu-item">
                    <a href="#" class="pure-menu-link">News</a>
                </li>
                <li class="pure-menu-item">
                    <a href="#" class="pure-menu-link">Sports</a>
                </li>
                <li class="pure-menu-item">
                    <a href="#" class="pure-menu-link">Finance</a>
                </li>
            </ul>
        </div>
    
        <profile></profile>
    </div>
</template>

<script>
import Profile from './views/Profile.vue'

export default {
    name: 'app',
    components: {
        Profile
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
    background-color: #607D8B;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin: 1em;
    text-align: center;
    color: #2c3e50;
}
</style>