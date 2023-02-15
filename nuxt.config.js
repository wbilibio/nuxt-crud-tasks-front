export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NuxtCrudTasksFront',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    baseApiUrl: process.env.BASE_API_URL || 'http://localhost:8000/api'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
  ],
  router: {
    middleware: ['auth']
  },
  axios: {
    baseURL: 'http://localhost:8000',
    proxy: true,
    credentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
  auth: {
    strategies: {
      'laravelJWT': {
        provider: 'laravel/jwt',
        url: 'http://localhost:8000',
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          refresh: { url: '/api/auth/refresh', method: 'post' },
          user: { url: '/api/auth/user', method: 'get' }
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 24
        },
        refreshToken: {
          maxAge: 20160 * 60
        }
      }
    },

  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: [
      'defu'
    ]
  }
}
