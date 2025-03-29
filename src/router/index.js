import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

Vue.use(VueRouter)

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

const router = new VueRouter({
    mode: 'history',
    routes,
    base: './'
})

export default router;