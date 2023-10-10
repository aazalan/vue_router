import { createRouter, createWebHistory} from 'vue-router'

import Home from './../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/brazil',
        name: 'Brazil',
        component: () => import ('./../views/Brazil.vue')
    },
    {
        path: '/panama',
        name: 'Panama',
        component: () => import ('./../views/Panama.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active_page',
    routes
})

export default router