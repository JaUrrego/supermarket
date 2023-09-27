import type { RouteRecordRaw } from 'vue-router'

export const productRoutes: RouteRecordRaw = {
    path: '/products',
    name: 'products',
    component: () => import('../layout/ProductLayout.vue'),
    children: [
        {
            path: '',
            name: 'products-crud',
            component: () => import('../pages/ProductPage.vue')
        }
    ]
}
