import { defineStore } from 'pinia';
import { useToast } from 'vue-toast-notification';

interface UserPayloadInterface {
    username: string;
    password: string;
}

interface RegisterPayloadInterface {
    username: string;
    email: string;
    password: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        loginUser: null,
    }),
    actions: {
        async loginApi({ username, password }: UserPayloadInterface) {
            const BASE_URL = useRuntimeConfig().public.api_url;
            const { data, pending }: any = await useFetch(`${BASE_URL}/auth/local`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    identifier: username,
                    password,
                },
            });
            this.loading = pending;
            console.log("login res", data);
            if (data.value) {
                const token = useCookie('token');
                token.value = data?.value?.jwt;
                this.loginUser = data?.value?.user;
                this.authenticated = true;
            }
        },

        async registerApi({ username, email, password }: RegisterPayloadInterface) {
            const BASE_URL = useRuntimeConfig().public.api_url;
            const $toast = useToast();
            try {
                const { data, pending, error }: any = await useFetch(`${BASE_URL}/auth/local/register`, {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: {
                        username,
                        email,
                        password,
                    },
                });
                this.loading = pending;
                console.log("RegisterPayloadInterface res", data);
                if (data.value) {
                    const token = useCookie('token'); // useCookie new hook in nuxt 3
                    token.value = data?.value?.jwt; // set token to cookie
                    this.loginUser = data?.value?.user;
                    this.authenticated = true; // set authenticated  state value to true
                } else if (error && error.value && error.value.data) {
                    console.log("error", error.value.data.error.message);
                    $toast.error(error.value.data.error.message);
                }
            } catch (e) {
                console.log("e", e);
            }
        },

        logUserOut() {
            const token = useCookie('token'); // useCookie new hook in nuxt 3
            this.authenticated = false; // set authenticated  state value to false
            token.value = null; // clear the token cookie
            this.loginUser = null;
        },
    },
});