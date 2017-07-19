<template>
    <div class="hello">
        <div class="card">
            <div class="pure-g">
                <div class="avatar pure-u-1 pure-u-md-1-2">
                    <img class="pure-img" src="https://vuejs.org/images/logo.png">
                </div>
                <div class="summary pure-u-1 pure-u-md-1-2">
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
    padding: 1em;
}

.avatar img {
    margin: 0 auto;
    border-radius: 50%;
    background-color: aqua;
    width: 45%;
}
</style>
