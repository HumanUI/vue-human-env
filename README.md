# usage

``` bash
// Advice
$ yarn install vue-human-env

// Or
$ npm install vue-human-env
```

``` javascript
// main.js
import Vue from 'vue'
import env from 'vue-human-env'
import envConfig from './env.js'  // You need create a file to save your config

Vue.use(env, envConfig)
```

``` javascript
// In other js file
import env from 'vue-human-env'
env.get('APP_DEBUG')
```

``` javascript
// In vue application, you can use this.$env
{
  ready () {
    this.$env.get('APP_DEBUG')
  }
}
```

``` javascript
// In template, you can use
{{ $env.get('APP_DEBUG') }}
```

### env.js file

```javascript
export {
  'APP_DEBUG': true,
  'APP_NAME': 'Vue Env library'
}
```

# Contributing

``` bash
// install dependencies
$ npm install

// serve with hot reload at localhost:8080
$ npm run dev

// build this library
$ npm run build
```
