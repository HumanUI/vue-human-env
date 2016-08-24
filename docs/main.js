import Vue from 'vue'
import App from './App'
import env from '../dist/vue-env'
import envConfig from './env.js'

Vue.use(env, envConfig)
console.log('When Vue use VueEnv', env.get('APP.TESTING.DEBUG'))

new Vue({
  el: 'body',
  components: { App }
})
