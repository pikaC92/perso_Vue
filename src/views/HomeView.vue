<template>
  <div>
    <!-- NAVBAR -->
    <b-container fluid class="bg-light p-2 border-bottom">
      <b-row class="mb-2 justify-content-end">
        <b-col cols="auto" class="pe-0">
          <router-link to="/plat">
            <b-button size="sm" variant="gray">+ Plats</b-button>
          </router-link>
        </b-col>
        <b-col cols="auto">
          <router-link to="/ingredient">
            <b-button size="sm" variant="gray">+ Ing.</b-button>
          </router-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <span class="fw-bold" style="font-size: 22px">{{ currentDate }}</span>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="mt-2 pt-2">
      <b-card class="mb-3" v-if=traitementsVisible>
        <b-form @submit.prevent="validerTraitements">
          <b-form-select v-for="(_, index) in traitements" v-model="traitements[index]" :options="optionsTraitements"
                         class="mb-4"/>
          <b-button type="submit" variant="primary" block class="float-end">Valider</b-button>
        </b-form>
      </b-card>

      <!-- Bloc Compléments alimentaires -->
      <b-card class="mb-3">
        <b-form @submit.prevent="validerComplements">
          <b-form-checkbox-group v-model="complements" :options="optionsComplements" class="mb-2"/>
          <b-button type="submit" variant="primary" block class="float-end">Valider</b-button>
        </b-form>
      </b-card>

      <!-- Bloc Alimentation -->
      <b-card title="Alimentation" class="mb-3">

        <b-form @submit.prevent="validerAlimentation">
          <b-form-select v-for="(_, index) in plats" v-model="plats[index]" :options="optionsPlats"
                         class="mb-4"/>
          <!--@change="majComposition(index)"-->
          <!--div v-if=false>
            <small>Énergie: {{ plat.composition.energie }} kcal | L: {{ plat.composition.lipides }}g | G:
              {{ plat.composition.glucides }}g | P: {{ plat.composition.proteines }}g</small>
          </div-->
          <b-button variant="secondary" type="button" class="me-2" @click="ajouterPlat">+ Ajouter</b-button>
          <b-button type="submit" variant="primary" block class="float-end">Valider</b-button>
        </b-form>
      </b-card>

      <!-- Bloc Besoins -->
      <b-card title="Besoins nutritionnels" class="mb-3">
        <b-button variant="secondary" block @click="calculerBesoins">Calculer</b-button>
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

import {
  get_complements,
  get_medicaments,
  get_plats,
  save_complements,
  save_plats,
  save_traitement
} from "@/js/ApiServices";

export default {
  name: 'home-view',
  data() {
    return {
      currentDate: new Date().toLocaleDateString('fr-FR'),
      traitementsVisible: true,
      traitements: [null, null, null],
      optionsTraitements: [],
      complements: [],
      optionsComplements: [],
      plats: [null, null, null],
      optionsPlats: [],
      compositionsPlats: {
        plat1: {energie: 600, lipides: 20, glucides: 70, proteines: 30},
        plat2: {energie: 500, lipides: 10, glucides: 80, proteines: 20},
      },
      besoins: null
    };
  },
  methods: {
    validerTraitements() {
      save_traitement(this.traitements).then(response => {
        console.log(response)
        this.traitementsVisible = false;
      })
    },
    validerComplements() {
      save_complements(this.complements).then(response => {
        console.log(response)
      })
    },
    ajouterPlat() {
      this.plats.push(null);
    },
    majComposition(index) {
      const plat = this.plats[index];
      plat.composition = this.compositionsPlats[plat.selection] || null;
    },
    validerAlimentation() {
      save_plats(this.plats).then(response => {
        console.log(response)
      })
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
  },
  created() {
    //load data
    get_medicaments().then(response => {
      this.traitementsVisible = !response['status']
      if (this.traitementsVisible) {
        this.optionsTraitements = [
          {value: null, text: '-- Sélectionner --'},
          ...response["medicaments"]
        ];
        this.traitements = response["suggested"]
      }
    })
    get_plats().then(response => {
      this.optionsPlats = [
        {value: null, text: '-- Sélectionner --'},
        ...response
      ];
    })
    get_complements().then(response => {
      this.optionsComplements = response;
    })
  }
};
</script>

<style lang="scss">
.form-check-inline {
  width: 44%;
  margin-bottom: 10px;
}

input[type='checkbox'] {
  transform: scale(1.6); /* Agrandit la case à cocher */
  margin-right: 12px; /* Optionnel : espace entre case et texte */
  margin-bottom: 18px;
}
</style>