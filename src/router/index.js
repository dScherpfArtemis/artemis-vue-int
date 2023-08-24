// Composables
import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/default/DefaultLayout.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'Home',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import(
                        /* webpackChunkName: "home" */ '@/views/HomePage.vue'
                    ),
            },
            {
                name: 'Recipe',
                path: '/recipe/:title',
                alias: '/r/:title',
                component: () => import('@/views/RecipePage.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
