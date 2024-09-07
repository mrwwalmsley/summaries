export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      isProduction: process.env.NODE_ENV === 'production',
    },
  },
  cdnURL: 'https://public.summaries.com',
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],
  content: {
    documentDriven: true,
  },
  experimental: {
    reactivityTransform: true,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
})
