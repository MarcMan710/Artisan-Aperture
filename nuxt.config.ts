// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/ui', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Artisan Aperture - Professional Photography',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Professional photography services including weddings, portraits, and commercial photography.'
        }
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap'
        }
      ]
    }
  }
})