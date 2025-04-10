import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AlimentForm from "@/views/AlimentForm.vue";
import PlatForm from "@/views/PlatForm.vue";


const routes = [
    {
        path: '/',
        name: 'home-view',
        component: HomeView
    },
    {   path: '/ingredient',
        name: 'AlimentForm',
        component: AlimentForm
    },
    {   path: '/plat',
        name: 'PlatForm',
        component: PlatForm
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;