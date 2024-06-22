

<template>
    <Navbar />
    <div class="mainContent">
        <slot />
    </div>
</template>

<!-- <template>
    <div>
        <header>
            <ul>
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
                <li v-if="!authenticated" class="loginBtn" style="float: right">
                    <nuxt-link to="/login">Login</nuxt-link>
                </li>
                <li v-if="authenticated" class="loginBtn" style="float: right">
                    <nuxt-link @click="logout">Logout</nuxt-link>
                </li>
            </ul>
        </header>
        <div class="mainContent">
            <slot />
        </div>
        <footer>
            <h1>Footer</h1>
        </footer>
    </div>
</template> -->