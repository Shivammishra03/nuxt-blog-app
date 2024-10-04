// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      // title: 'Nuxt 3',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        { rel: 'preconnect', href:'https://fonts.googleapis.com'},
        { rel: 'preconnect', href:'https://fonts.gstatic.com', crossorigin:''},
        { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap'},
      ],
    }
  },

  compatibilityDate: '2024-10-01'
})