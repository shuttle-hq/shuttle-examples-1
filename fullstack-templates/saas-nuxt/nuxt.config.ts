export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  compilerOptions: {
    types: ['@nuxt/types', '@nuxtjs/tailwindcss'],
    isCustomElement: (tag) => tag.startsWith('ion-'),
  },
})
