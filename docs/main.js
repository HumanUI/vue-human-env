import Vue from 'vue'
import App from './App'
import env from '../src'
import envConfig from './env.js'

Vue.use(env, envConfig)
console.log('When Vue use VueEnv', env.get('APP.TESTING.DEBUG'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
