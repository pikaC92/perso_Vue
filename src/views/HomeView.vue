<template>
  <main>
    <h3>Importer un fichier</h3>

    <div>
        <form action="upload" method=post enctype=multipart/form-data>
            <input type="file" name="file">
            <input type="submit">
        </form>
    </div>

  </main>

</template>

<style>
</style>

<script>
export default {
  name: 'home-view',
  methods: {}
}
</script>