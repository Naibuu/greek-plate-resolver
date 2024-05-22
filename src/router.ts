import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/Home.vue'
import NotFoundView from './views/NotFound.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
