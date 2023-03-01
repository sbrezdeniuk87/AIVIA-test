import { createRouter, createWebHistory} from 'vue-router';

import LoginPage from '@/pages/LoginPage';
import ProductsPage from '@/pages/ProductsPage'


const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginPage        
    },
    {
        path: '/products',
        name: 'Products',
        component: ProductsPage,
        meta: {
            requiresAuth: true
        }      
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth) {
        if(!localStorage.getItem('isAuth')) {
            next({name: 'Login'});
        } else {
            next()
        }
    } else {
        next();
    }
});

export default router