import { createWebHistory, createRouter } from 'vue-router'

import LocationView from './views/Location.vue'
import NotFoundView from './views/NotFound.vue'

const routes = [
    { path: '/', component: LocationView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
