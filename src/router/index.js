import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/index.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/about.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/dashboard.vue')
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('../views/products/index.vue')
    },
    {
        path: '/products/detail',
        name: 'ProductDetail',
        component: () => import('../views/products/detail.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/profile.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('../views/settings.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/contact.vue')
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
//# sourceMappingURL=index.js.map