<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>

  </div>

</template>

<style lang="scss" scoped>

#app {
  height: 100%;
}

body {
  background-color: deeppink;
}
</style>

<script>

export default {
  name: 'App',
  methods: {}
}
</script>
