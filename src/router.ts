import { createWebHistory, createRouter } from 'vue-router'

import IndexView from './views/Index.vue'
import NotFoundView from './views/NotFound.vue'

const routes = [
    { path: '/', component: IndexView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
