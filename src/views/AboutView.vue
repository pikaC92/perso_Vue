<template>
  <main>
    <h1>Liste des fichiers disponibles</h1>
    <p>{{files}}</p>
  </main>

</template>

<style scoped>
#list{
    border-bottom: 2px solid red;
    padding-bottom: 5px;
}

</style>

<script>
import {get_list} from "@/services/ApiServices";

export default {
  name: "list-view",
  data: () => {
    return {
      files: ""
    }
  },
  methods: {
    getFiles(){
      get_list().then(response => {
        this.files = response;
      })
    }
  },
   beforeMount(){
    this.getFiles();
 }
}
</script>