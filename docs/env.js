export default {
  'APP_DEBUG': true,
  'APP_NAME': process.env.NODE_ENV !== 'production' ? 'Vue Env library for dev' : 'Vue Env library for prod',
  'APP': {
    'DEBUG': false,
    'TESTING': {
      'DEBUG': 0
    }
  }
}
