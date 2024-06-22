<template>
    <nav class="navbar is-light">
        <div class="container">
            <div class="navbar-brand">
                <nuxt-link class="navbar-item" to="/">My Nuxt Project</nuxt-link>
                <button class="button navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable" v-if="authenticated">
                        <a class="navbar-link">
                            {{ loginUser?.username }}
                        </a>
                        <div class="navbar-dropdown">
                            <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
                            <hr class="navbar-divider" />
                            <a class="navbar-item" @click="logout">Logout</a>
                        </div>
                    </div>
                    <template v-else>
                        <nuxt-link class="navbar-item" to="/register">Register</nuxt-link>
                        <nuxt-link class="navbar-item" to="/login">Log In</nuxt-link>
                    </template>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created

const router = useRouter();


const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated, loginUser } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const logout = () => {
    logUserOut();
    router.push('/login');
};
</script>