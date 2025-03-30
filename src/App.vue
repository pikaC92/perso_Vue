<template>
  <div>
    <!-- NAVBAR -->
    <b-container fluid class="bg-light p-2 border-bottom">
      <b-row class="mb-2 justify-content-end">
        <b-col cols="auto" class="pe-0">
          <b-button size="sm" variant="secondary"  @click="ajouterPlat">+ Plats</b-button>
        </b-col>
        <b-col cols="auto">
          <b-button size="sm" variant="secondary" @click="ajouterIngredient">+ Ing.</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <span class="fw-bold" style="font-size: 22px">{{ currentDate }}</span>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="mt-2 pt-2">

      <!-- Bloc Traitements -->
      <b-card class="mb-3">
        <b-form @submit.prevent="validerTraitements">
          <b-form-select v-for="(_, index) in traitements" v-model="traitements[index]" :options="optionsTraitements"
                         class="mb-4"/>
          <b-button type="submit" variant="success" block class="float-end">Valider</b-button>
        </b-form>
      </b-card>

      <!-- Bloc Compléments alimentaires -->
      <b-card class="mb-3">
        <b-form @submit.prevent="validerComplements">
          <b-form-checkbox-group v-model="complementsSelectionnes" :options="optionsComplements" class="mb-2"/>
          <b-button type="submit" variant="success" block class="float-end">Valider</b-button>
        </b-form>
      </b-card>

      <!-- Bloc Alimentation -->
      <b-card title="Alimentation" class="mb-3">
        <div v-for="(plat, index) in plats" :key="index" class="mb-3">
          <b-form-select v-model="plat.selection" :options="optionsPlats" @change="majComposition(index)" class="mb-2"/>
          <div v-if="plat.composition">
            <small>Énergie: {{ plat.composition.energie }} kcal | L: {{ plat.composition.lipides }}g | G:
              {{ plat.composition.glucides }}g | P: {{ plat.composition.proteines }}g</small>
          </div>
        </div>
        <b-button variant="info" size="sm" class="me-2" @click="ajouterPlat">Ajouter un plat</b-button>
        <b-button variant="success" size="sm" @click="validerAlimentation" class="float-end">Valider</b-button>
      </b-card>

      <!-- Bloc Besoins -->
      <b-card title="Besoins nutritionnels" class="mb-3">
        <b-button variant="warning" block @click="calculerBesoins">Calculer</b-button>
        <div v-if="besoins">
          <p class="mt-2">
            {{ besoins.energie }}% énergie, {{ besoins.lipides }}% L, {{ besoins.glucides }}% G, {{
              besoins.proteines
            }}% P
          </p>
        </div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().toLocaleDateString('fr-FR'),
      traitements: [null, null, null],
      optionsTraitements: [
        {value: null, text: '-- Sélectionner --'},
        {value: 'A', text: 'Traitement A'},
        {value: 'B', text: 'Traitement B'},
      ],
      complementsSelectionnes: [],
      optionsComplements: ['Magnésium', 'Antioxydant','Fer', 'Calcium', 'B9', 'D', 'Calcium' ],
      plats: [
        {selection: null, composition: null}
      ],
      optionsPlats: [
        {value: null, text: 'Choisir un plat'},
        {value: 'plat1', text: 'Riz - Poulet'},
        {value: 'plat2', text: 'Pâtes - Légumes'},
      ],
      compositionsPlats: {
        plat1: {energie: 600, lipides: 20, glucides: 70, proteines: 30},
        plat2: {energie: 500, lipides: 10, glucides: 80, proteines: 20},
      },
      besoins: null
    };
  },
  methods: {
    validerTraitements() {
      this.traitementsVisible = false;
    },
    validerComplements() {
      this.complementsVisible = false;
    },
    ajouterPlat() {
      this.plats.push({selection: null, composition: null});
    },
    ajouterIngredient() {
      this.plats.push({selection: null, composition: null});
    },
    majComposition(index) {
      const plat = this.plats[index];
      plat.composition = this.compositionsPlats[plat.selection] || null;
    },
    validerAlimentation() {
      // enregistrement simulé
    },
    calculerBesoins() {
      let total = {energie: 0, lipides: 0, glucides: 0, proteines: 0};
      this.plats.forEach(p => {
        if (p.composition) {
          total.energie += p.composition.energie;
          total.lipides += p.composition.lipides;
          total.glucides += p.composition.glucides;
          total.proteines += p.composition.proteines;
        }
      });
      // pourcentage fictif par rapport à des besoins de référence
      const ref = {energie: 2000, lipides: 70, glucides: 260, proteines: 50};
      this.besoins = {
        energie: Math.round((total.energie / ref.energie) * 100),
        lipides: Math.round((total.lipides / ref.lipides) * 100),
        glucides: Math.round((total.glucides / ref.glucides) * 100),
        proteines: Math.round((total.proteines / ref.proteines) * 100),
      };
    }
  }
};
</script>

<style lang="scss">
.form-check-inline {
  width: 40%;
  margin-bottom: 10px;
}

input[type='checkbox'] {
  transform: scale(1.6); /* Agrandit la case à cocher */
  margin-right: 12px;     /* Optionnel : espace entre case et texte */
  margin-bottom: 18px;
}
</style>