<template>
  <div class="h-screen z-0">
    <Navigation />
    <NuxtPage />
  </div>
</template>

<script setup>
    import Navigation from '/components/Navigation.vue'
</script>

<style>
  @import url('/node_modules/@fontsource/archivo/400.css');

  body {
    font-family: vollkorn;
    background-color: #312e81; /* bg-indigo-900 */
  }
</style>