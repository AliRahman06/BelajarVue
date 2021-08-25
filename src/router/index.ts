import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '../views/Home.vue'
import Halaman3 from '../views/Halaman3.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/halaman3',
        name: 'Halaman3',
        component: Halaman3
    },
]

const router = createRouter({
    history: createWebHistory(''),
    routes
})

export default router