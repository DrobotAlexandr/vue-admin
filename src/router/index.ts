import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        component: () => import('../views/pages/Login/LoginPage.vue')
    },
    {
        path: '/admin/login',
        name: 'login',
        component: () => import('../views/pages/Login/LoginPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
