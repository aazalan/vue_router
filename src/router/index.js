import { createRouter, createWebHistory} from 'vue-router'

import Home from './../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () => import ('./../views/Destination.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active_page',
    routes
})

export default router