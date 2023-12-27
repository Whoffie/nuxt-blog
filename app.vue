<template>
  <div class=" h-screen">
    <Navigation />
    <Splash />
    <SidePanels />
    <Feed />
  </div>
</template>

<script>
    import Navigation from '/components/Navigation.vue'
    import Splash from '/components/Splash.vue'
    import Feed from '/components/Feed.vue'
    import SidePanels from '/components/SidePanels.vue'
</script>

<style>
  @import url('/node_modules/@fontsource/archivo/400.css');

  body {
    font-family: vollkorn;
    background-color: #312e81; /* bg-indigo-900 */
  }
</style>