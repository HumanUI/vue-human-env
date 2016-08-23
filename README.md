# usage

``` bash
$ npm install --save vue-vitual-env
```

``` javascript
import Vue from 'vue'
import VueEnv from 'vue-vitual-env'

Vue.use(VueEnv)

// In vue application, you can use this.$env
{
  ready () {
    this.$env.get('APP_DEBUG')
  }
}

// In template, you can use
{{ $env.get('APP_DEBUG') }}
```

# Contributing

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
