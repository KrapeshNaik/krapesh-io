<template>
    <div class="hello">
        <div class="card">
            <div class="pure-g">
                <div class="pure-u-1-1">
                    <img class="pure-img avatar" src="https://vuejs.org/images/logo.png">
                </div>
                <div class="pure-u-1-1">
                    <p>Full</p>
                </div>
                <div class="pure-u-1-3">
                    <p>Thirds</p>
                </div>
                <div class="pure-u-1-3">
                    <p>Thirds</p>
                </div>
                <div class="pure-u-1-3">
                    <p>Thirds</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Hello Vue'
        }
    }
}
</script>

<style scoped>
.avatar {
    margin: 0 auto;
}
</style>
