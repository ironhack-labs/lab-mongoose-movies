module.exports = app => {

  
    app.use('/', require('./base.routes.js'))
    app.use('/celebrities', require('./celebrities.js'))
    app.use('/movies', require('./movies.js'))
    
}