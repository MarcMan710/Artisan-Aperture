// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/ui', '@nuxtjs/tailwindcss'],
  fonts: {
    families: [
      { name: 'Playfair Display', provider: 'google', weights: ['400', '500', '600', '700'] },
      { name: 'Open Sans', provider: 'google', weights: ['400', '500', '600'] }
    ]
  },
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
      link: []
    }
  }
})