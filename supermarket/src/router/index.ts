import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '@/auth/router/auth'
import { productRoutes } from '@/products/router/product'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/home/pages/HomePage.vue')
        },
        {
            path: '/productId',
            name: 'ProductByIdPage',
            component: () => import('@/home/pages/ProductByIdPage.vue')
        },
        {
            ...authRoutes
        },
        {
            ...productRoutes
        }
    ]
})

export default router
