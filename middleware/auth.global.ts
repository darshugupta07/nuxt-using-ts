import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware((to) => {
    const { authenticated } = storeToRefs(useAuthStore());
    const token = useCookie('token');

    if (token.value) {
        authenticated.value = true;
    }

    // Define routes that do not require authentication
    const publicRoutes = ['login', 'register']; // Add other routes that should be public

    // if token exists and url is /login redirect to homepage
    if (token.value && to?.name === 'login') {
        return navigateTo('/');
    }
 
    // if (!token.value && to?.name) {
    //     const routeName: string = to.name ? to.name.toString() : '';
    //     if (!publicRoutes.includes(routeName)) {
    //         abortNavigation();
    //         return navigateTo('/login');
    //     }
    // }

    if (!token.value && (typeof to?.name !== 'string' || !publicRoutes.includes(to.name))) {
        abortNavigation();
        return navigateTo('/login');
    }
});