module.exports = app => {

  // Base URLS
  app.use('/', require('./base.route.js'))
  app.use('/', require('./movies.route.js'))
  app.use('/', require('./celebrities.route.js'))
  

  
}