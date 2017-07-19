<template>
    <div class="animated flipInX" id="app">
        <profile-card></profile-card>
        <router-link to="/foo">Go to Foo</router-link>
    </div>
</template>

<script>
import ProfileCard from '../components/ProfileCard.vue'

export default {
    name: 'profile',
    components: {
        ProfileCard
    }
}
</script>