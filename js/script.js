const {createApp} = Vue

createApp({
     data(){
          return{
               saluto:'Ciao Vue.js',
               immagine:'https://static.frontendmasters.com/assets/courses/2018-01-16-advanced-vue/posterframe.webp'
          }
     }
}).mount('#app')