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
        component: () => import ('./../views/Destination.vue'),
        props: route => ({...route.params, id : parseInt(route.params.id)})
    },
    {
        path: '/destination/:id/:slug/:experienceSlug',
        name: 'experience.show',
        component: () => import ('./../views/Experience.vue'),
        props: route => ({...route.params, id : parseInt(route.params.id)})
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active_page',
    routes
})

export default router