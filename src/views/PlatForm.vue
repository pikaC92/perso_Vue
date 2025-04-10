<template>
  <b-container class="p-3">


    <b-card>
      <h5 class="text-center mb-0">Nouveau plat</h5>
    </b-card>

    <b-card>

      <b-form @submit.prevent="valider">
        <!-- Bloc Ingrédients -->
        <div v-for="(ing, index) in ingredients" :key="index" class="mb-3">
          <b-form-select
              v-model="ing.selection"
              :options="optionsIngredients"
              class="mb-2"
          />

          <div class="composition-line">
            <label class="composition-label"> # portions</label>
            <b-form-input v-model.number="ing.portions"
                          type="number"
                          class="composition-input"
            />
          </div>

        </div>

        <!-- Boutons d'action -->
        <div class="d-inline-flex mb-3">
          <b-button variant="secondary" @click="ajouterIngredient"> + Ajouter</b-button>
        </div>

        <div>
          <b-button variant="primary" type="submit">Valider</b-button>
          <router-link to="/">
            <b-button variant="gray" type="button" class="me-4">Annuler</b-button>
          </router-link>
        </div>

        <!-- Affichage de la composition -->
        <div v-if="composition">
          <label>Composition</label>
          <!-- À remplacer par un vrai graphique si souhaité -->
          <div class="border rounded p-3 mb-3 text-center">[Graphique]</div>

          <label>En %</label>
          <b-form-textarea readonly rows="2" v-model="compositionPourcentage"/>
        </div>
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'PlatForm',
  data() {
    return {
      ingredients: [
        {selection: null, portions: 1},
        {selection: null, portions: 1}
      ],
      optionsIngredients: [
        {value: null, text: 'Sélectionner un ingrédient'},
        {value: 'riz', text: 'Riz - 100g'},
        {value: 'poulet', text: 'Poulet - 100g'},
        {value: 'courgette', text: 'Courgette - 100g'}
      ],
      compositions: {
        riz: {energie: 350, lipides: 1, glucides: 78, proteines: 7},
        poulet: {energie: 240, lipides: 12, glucides: 0, proteines: 30},
        courgette: {energie: 20, lipides: 0, glucides: 4, proteines: 2},
      },
      composition: null,
      compositionPourcentage: ''
    }
  },
  methods: {
    ajouterIngredient() {
      this.ingredients.push({selection: null, portions: 1});
    },
    calculerComposition() {
      let total = {energie: 0, lipides: 0, glucides: 0, proteines: 0};
      this.ingredients.forEach(ing => {
        const compo = this.compositions[ing.selection];
        if (compo) {
          total.energie += compo.energie * ing.portions;
          total.lipides += compo.lipides * ing.portions;
          total.glucides += compo.glucides * ing.portions;
          total.proteines += compo.proteines * ing.portions;
        }
      });

      this.composition = {...total};
      const ref = {energie: 2000, lipides: 70, glucides: 260, proteines: 50};
      this.compositionPourcentage =
          `Énergie: ${Math.round((total.energie / ref.energie) * 100)}%, ` +
          `L: ${Math.round((total.lipides / ref.lipides) * 100)}%, ` +
          `G: ${Math.round((total.glucides / ref.glucides) * 100)}%, ` +
          `P: ${Math.round((total.proteines / ref.proteines) * 100)}%`;
    },
    valider() {
      alert('Plat enregistré avec succès !');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
label {
  font-weight: 500;
  margin-top: 10px;
}

.card {
  margin-bottom: 10px;
  background-color: white;
}

button {
  float: inline-end;
}

.composition-input {
  width: 40%;
  text-align: end;
}


.composition-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.composition-label {
  flex: 1;
  font-weight: 500;
  text-align: end;
  margin-right: 8px;
}


</style>