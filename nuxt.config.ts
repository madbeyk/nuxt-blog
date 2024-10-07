// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/image'
  ],
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'nuxt-color-mode'
  },
  content: {
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        'rehype-slug',
        ['rehype-autolink-headings', { behavior: 'after' }]
      ],
    }
  },
  ui: {
    // https://ui.nuxt.com/getting-started/configuration
  },
  // Add this to ensure Tailwind CSS is properly configured
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Add this to prevent hydration mismatches
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})