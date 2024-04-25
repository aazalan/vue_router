<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
        <h1>Login</h1>
        <label for="username"></label>
        <input v-model="username" name="userrname" type="text" class="input"/>
        <label for="password"></label>
        <input v-model="password" name="password" type="text" class="input"/>
        <button class="btn">Login</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username : '',
            password: '',
        }
    },

    methods: {
        login() {
            window.user = this.username;
            this.$router.push({name: 'protected'});
        }
    }
}
</script>

<style>

</style>