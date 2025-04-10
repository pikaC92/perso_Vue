<template>

  <b-container class="p-3">

    <b-card>
      <h5 class="text-center mb-0">Nouvel Ingrédient</h5>
    </b-card>

    <b-card>
      <b-form @submit.prevent="valider">
        <!-- Nom -->
        <b-form-group class="mb-2">
          <b-form-input
              id="nomInput"
              v-model="aliment.nom"
              placeholder="Nom"
              class="text-center"
              required
          />
        </b-form-group>

        <!-- Portion -->
        <b-form-group class="mb-3">
          <b-form-input
              id="portionInput"
              v-model="aliment.portion"
              placeholder="Portion"
              class="text-center"
              required
          />
        </b-form-group>

        <!-- Composition -->
        <div v-for="(label, key) in compositionLabels" :key="key" class="composition-line">
          <label class="composition-label">{{ label }}</label>
          <b-form-input v-model.number="aliment.composition[key]"
                        type="number"
                        class="composition-input"
          />
        </div>
        <b-col>
          <b-button variant="primary" type="submit">Valider</b-button>
          <router-link to="/">
            <b-button variant="gray" type="button" class="me-4">Annuler</b-button>
          </router-link>
        </b-col>

      </b-form>
    </b-card>

    <b-card>
      <b-button variant="secondary" @click="calculerComposition">Calculer</b-button>

      <!-- Résultat -->
      <div v-if="compositionPourcentage" class="mt-3">
        <label>En %</label>
      </div>
    </b-card>

  </b-container>
</template>

<script>
export default {
  name: 'AlimentForm',
  data() {
    return {
      aliment: {
        nom: '',
        portion: '',
        composition: [null, null, null, null, null, null, null, null]
      },
      compositionPourcentage: '',
      compositionLabels: ['Énergie (kcal)', 'Glucides (g)', 'Lipides (g)', 'Protéines (g)', 'Magnésium (mg)', 'Potassium (mg)', 'Fer (mg)', 'Calcium (mg)']
    };
  },
  methods: {
    calculerComposition() {
      // Exemple fictif
      const coef = 0.5;
      const result = Object.entries(this.aliment.composition)
          .map(([k, v]) => `${this.compositionLabels[k]}: ${v ? Math.round(v * coef) + '%' : '0%'}`)
          .join(', ');
      this.compositionPourcentage = result;
    },
    valider() {
      if (!this.aliment.nom || !this.aliment.portion) {
        alert('Le nom et la portion sont obligatoires.');
        return;
      }

      // Simule un enregistrement (tu peux stocker en localStorage ou envoyer à une API ici)
      alert('Ingrédient enregistré avec succès !');

      // Redirection vers la page d’accueil
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>


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

.composition-input {
  width: 60%;
  text-align: end;
}

.card {
  margin-bottom: 10px;
  background-color: white;
}

button {
  float: inline-end;
}

</style>
