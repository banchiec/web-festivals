
module.exports = app => {
  app.use('/', require('./base.route'))
  app.use('/festivales', require('./festival.route'))
  app.use('/usuarios', require('./user.route'))
  app.use('/bandas', require('./band.route'))
  app.use('/', require('./auth.route'))
}