module.exports = app => {

    // Base URLS
    app.use('/movies', require('./movies.routes.js'))
    app.use('/celebrities', require('./celebrities.routes.js'))
    app.use('/', require('./base.routes.js'))
}