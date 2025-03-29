import Vue from 'vue'

// import scss
import './assets/styles/index.scss'

import App from './App.vue'
import router from './router'


import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)

//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

import { faDownload, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faDownload, faMagnifyingGlass)

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')