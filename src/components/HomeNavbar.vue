<template>

  <b-navbar variant="light" class="justify-content-between">
    <b-button-group>
      <b-button variant="primary">+ Plats</b-button>
      <b-button variant="secondary">+ Ingrédient</b-button>
    </b-button-group>
    <span class="navbar-text mx-auto">{{ currentDate }}</span>
  </b-navbar>

</template>


<script>
export default {
  name: "home-navbar",
  data() {
    return {
      currentDate: new Date().toLocaleDateString()
    }
  }
}
</script>

<style lang="scss">

@import "../assets/styles/custom_variables";

</style>