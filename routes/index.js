
module.exports = app => {
  app.use('/', require('./base.route'))
  app.use('/festivales', require('./festival.route'))
  app.use('/usuarios', require('./user.route'))

  // app.use('/festivales', require('./festival.route.js'))
  // app.use('/usuario', require('./user.route'))
}

