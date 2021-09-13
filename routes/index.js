module.exports = app => {

  // Base URLS
  app.use('/', require('./base.route'))
  app.use('/festivales', require('./festival.route'))
  
}