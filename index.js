require('babel-register')({
  presets: [ 'env' ]
})

require('./src/lib/server').start()
