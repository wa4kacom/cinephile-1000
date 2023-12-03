import { createRouter, createWebHistory, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home, alias: '/cinephile-1000' },
        { path: '/movie', name: 'movies', component: ()=>import('./pages/Films.vue') },
        { path: '/tv', name: 'tvs', component: ()=>import('./pages/Serials.vue') },
        { path: '/search', name: 'search', component: ()=>import('./pages/Search.vue') },
    ],
    linkActiveClass: 'active'
})

export default router;