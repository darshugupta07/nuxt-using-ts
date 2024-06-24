// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'my-nuxt-project',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'test' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css' }
      ]
    },
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
        ],
      },
    ],
  ], 
  runtimeConfig: {
    public: {
      api_url: process.env.BASE_URL
    }
  }
})
