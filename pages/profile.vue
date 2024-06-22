<template>
    <section class="section">
        <div class="container">
            <h2 class="title">My Profile</h2>
            <div class="content">
                <p>
                    <strong>Username:</strong>
                    {{ loginUser.username }}
                </p>
                <p>
                    <strong>Email:</strong>
                    {{ loginUser.email }}
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created

const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated, loginUser } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

</script>