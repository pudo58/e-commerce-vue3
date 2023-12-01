import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/views/home/HomePage.vue')
        },
        {
            path: '/home',
            component: () => import('@/views/home/HomePage.vue')
        },
        {
            path: '/index',
            component: () => import('@/views/home/HomePage.vue')
        }
    ]
})

export default router
