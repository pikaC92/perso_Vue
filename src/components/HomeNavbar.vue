<template>
  <div id="nav">
    <b-navbar toggleable="lg" variant="white" id="main-navbar">
      <b-navbar-brand href="/">
        <img src="@/assets/brand.png" alt="Logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- Dropdown model -->
          <!--b-nav-item-dropdown right class="text-primary">
            <template #button-content>
              Déconnexion
            </template>
          </b-nav-item-dropdown-->

          <div class="d-flex mr-3">
              <b-navbar-nav class="mr-0">
                <b-nav-item :class="isSelected('/')" href="/" class="text-primary"> Accueil </b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav>
                <b-nav-item :class="isSelected('/list')" href="/list">
                  Fichiers
                </b-nav-item>
              </b-navbar-nav>
          </div>

          <!-- Search model -->
          <!--form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
          </form-->

          <!-- Log out button model -->
          <b-button class="nav-bar-button mr-3 ml-auto" variant="primary">Déconnexion</b-button>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
 </div>
</template>


<script>
export default {
  name: "home-navbar",
  methods: {
    isSelected(url){
      return url == window.location.pathname ? "selected":"not-selected"
    }
  }
}
</script>

<style lang="scss">

@import "src/assets/styles/custom_variables";

#nav .container {
  padding-top: 5px;
  padding-bottom: 5px;
  max-width: 100%;
}

.navbar-light .navbar-nav .nav-link {
  font-size: 17px;
  margin: 0px 20px;
  letter-spacing: 0.4px;
}

.navbar-light .navbar-nav .selected .nav-link {
  color: white;
}

.navbar-light .navbar-nav .not-selected .nav-link {
  color: $primary;
}

#main-navbar{
  border-bottom: solid 1px $light;
}

.selected {
  border-radius: 10px;
  background-color: rgba(0, 36, 84, 0.5);
}

.not-selected {
  background-color: white;
}

</style>