<template>
    <!-- рендерит тот view который сейчас активен, которому соответстует значение в URL  -->
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/brazil">Brazil</router-link>
    </div>


    <div class="container">
      <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
