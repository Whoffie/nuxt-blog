<template>
  <div class="bg-indigo-900 h-screen">
    <Navigation />
    <Splash />    
  </div>
</template>

<script>
    import Navigation from "/components/Navigation.vue"
    import Splash from "/components/Splash.vue"
</script>

<style>
  @import url('/node_modules/@fontsource/archivo/400.css');

  body {
    font-family: vollkorn;
  }
</style>