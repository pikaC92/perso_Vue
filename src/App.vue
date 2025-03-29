<template>
    <div id="app">
      <home-navbar></home-navbar>

      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>

</template>

<style lang="scss" scoped>

#app {
  height: 100%;
}
</style>

<script>
import HomeNavbar from "@/components/HomeNavbar.vue";

export default {
  name: 'App',
  components: {HomeNavbar},
  methods: {}
}
</script>
