import { createRouter, createWebHistory} from 'vue-router'
import sourceData from './../data.json'
import Home from './../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/protected',
        name: 'protected',
        component: () => import ('./../views/Protected.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ('./../views/Login.vue'),
    },
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () => import ('./../views/Destination.vue'),
        props: route => ({...route.params, id : parseInt(route.params.id)}),
        beforeEnter(to, from) {
            const exists = sourceData.destinations.find(destination => destination.id === parseInt(to.params.id))
            if (!exists) return {
                name : 'NotFound',
                params: { pathMatch: to.path.split('/').slice(1) },
                query: to.query,
                hash: to.hash,
            }
        },
        children: [
            { 
                path: ':experienceSlug',
                name: 'experience.show',
                component: () => import ('./../views/Experience.vue'),
                props: route => ({...route.params, id : parseInt(route.params.id)}),
            }

        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('./../views/NotFound.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active_page',
    scrollBehavior(to, from, savePosition) {
        return savePosition || new Promise((resolve) => {
            setTimeout(() => resolve({top: 0, behavior: 'smooth'}), 1000)
        })
    },
    routes
})

router.beforeEach((to, from, ) => {
    if (to.meta.requiresAuth && !window.user) {
        return {name: 'login'}
    }
})

export default router