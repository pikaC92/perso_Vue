import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";


const routes = [
    {
        path:'/',
        name: 'home-view',
        component: HomeView
    },
    {
        path:'/list',
        name: 'list-view',
        component: AboutView
    },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;