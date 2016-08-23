import Vue from 'vue'
import VueEnv from '../src/vue-env'
import EnvConfig from './env.js'
import App from './App'

Vue.use(VueEnv, EnvConfig)
console.log('When Vue use VueEnv', VueEnv.get('APP_NAME'))

new Vue({
  el: 'body',
  components: { App }
})
