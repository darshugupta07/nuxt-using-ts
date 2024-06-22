

<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4 is-offset-4">
                    <h2 class="title has-text-centered">Welcome back!</h2>
                    <form method="post" @submit.prevent="login">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input v-model="user.username" type="text" class="input" placeholder="Enter Username"
                                    name="uname" required />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <input v-model="user.password" type="password" class="input"
                                    placeholder="Enter Password" name="psw" required />
                            </div>
                        </div>
                        <div class="control">
                            <button type="submit" class="button is-dark is-fullwidth">Log In</button>
                        </div>
                    </form>
                    <div class="has-text-centered" style="margin-top: 20px">
                        <p>
                            Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created

const { loginApi } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
    username: '',
    password: '',
});
const router = useRouter();

const login = async () => {
    await loginApi(user.value); // call authenticateUser and pass the user object
    // redirect to homepage if user is authenticated
    if (authenticated) {
        router.push('/');
    }
};
</script>