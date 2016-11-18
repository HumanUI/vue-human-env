# What is vue-human-env

`vue-human-env` is a object to save your application environment variables.
And you can get some value from it.

# Install

In your terminal

``` javascript
$ yarn add vue-human-env // or using `npm install`
```

In your application, create src/env/index.js file

``` javascript
// src/env/index.js
import Vue from 'vue'
import VueHumanEnv from 'vue-human-env'
import config from './config.js'
import configLocal from './config.local.js'  // Copy from config.js, to save local config

Vue.use(VueHumanEnv, config, configLocal)

export default VueHumanEnv
```

And then import env in your main.js

``` javascript
import Vue from 'vue'
import env from './env'

new Vue({
  // el....
  // store,
  // router,
  env
})
```
# Usage

### Method one

``` javascript
import Vue from 'vue'

Vue.env.get('APP_DEBUG')
```

### Method two
``` javascript
// in Vue component
{
  mounted () {
    this.$env.get('APP_DEBUG')
  }
}
```

### Method three

``` javascript
import env from '/src/some/path/env'

env.get('APP_DEBUG')
```

# Methods

``` javascript
// Simply get method
env.get('APP_DEBUG')

// Using dot to get nested object
env.get('MAIL.MAIL_PORT')
```

# How to define a config.js

``` javascript
export {
  APP_DEBUG: true,
  APP_NAME: 'Vue Env library',
  // Nested object
  MAIL: {
    MAIL_PORT: 900
  }
}
```

# Contributing

``` bash
// install dependencies
$ yarn install

// serve with hot reload at localhost:8080
$ npm run dev

// build this library
$ npm run build
```
