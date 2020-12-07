
export default {
  mode: 'universal',
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    // Live URL
    // apiUrl: 'http://api.smart.samsungwall_o.com/',
    // CMSUrl_Samsungwall_image: 'http://odsdev.intra_o.smart/CMS_SMART/image/samsungwall/phone_images/',
    // CMSUrl_Samsungwall_video: 'http://odsdev.intra_o.smart/CMS_SMART/image/samsungwall/phone_videos/',
    // Local URL
    apiUrl: 'http://stg-ws.intra.smart/nuxt_api_samsungwall/',
    CMSUrl_Samsungwall_image: 'http://odsdev.intra.smart/CMS_SMART/image/samsungwall/phone_images/',
    CMSUrl_Samsungwall_video: 'http://odsdev.intra.smart/CMS_SMART/image/samsungwall/phone_videos/',
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src:'js/jquery3.3.1.js' },
      { src:'js/jqueryUI.1.12.1.js' },
      { src:'js/velocity.js' },
      { src:'js/velocityUI.js' }
    ]
  },
  // FOR STAGING
  // router: {
  //   base: "/samsungwall/"
  // },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'blue', height: '5px' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
    '~/plugins/vue-loading-overlay'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  // buildModules: [
  //   // Doc: https://github.com/nuxt-community/eslint-module
  //   '@nuxtjs/eslint-module'
  // ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
