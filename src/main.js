import {createApp} from 'vue';

// import scss
import './assets/styles/index.scss';

import App from './App.vue'

//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faDownload, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {createRouter, createWebHistory} from "vue-router";

// Importation de BootstrapVueNext
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import {bootstrapPlugin, Components} from 'bootstrap-vue-next';

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import router from "@/router";

// Ajout des icônes à la bibliothèque
library.add(faDownload, faMagnifyingGlass);

const app = createApp(App);

// Utilisation du routeur
app.use(router);

app.use(bootstrapPlugin)

// Enregistrement global des composants de bootstrap-vue-next
for (const [key, component] of Object.entries(Components)) {
  app.component(key, component);
}

// Enregistrement global du composant FontAwesomeIcon
app.component('font-awesome-icon', FontAwesomeIcon);

// Montage de l'application
app.mount('#app');