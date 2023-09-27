// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head:{
      title: 'Nuxt Shop',
      meta:[
        {name:'detail', content: 'shop details of products'}
      ],
      link:[
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Material+Icons'}
      ]
    }
  }
  

})
