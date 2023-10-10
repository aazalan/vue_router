<template>
    <!-- рендерит тот view который сейчас активен, которому соответстует значение в URL  -->
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/brazil">Brazil</router-link>
        <router-link to="/panama">Panama</router-link>
    </div>

</template>

<script setup>

</script>

<style>
    #nav .active_page {
        color: #7c9dbc;
        border-bottom: 2px solid #7c9dbc;
    }
</style>