export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  compilerOptions: {
    types: ['@nuxt/types', '@nuxtjs/tailwindcss'],
  },
})
