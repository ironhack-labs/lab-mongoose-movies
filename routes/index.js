module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))

    // Celebrities
    app.use('/celebrities', require('./celebrities.routes.js'))

    // Movies
    app.use('/movies', require('./movies.routes.js'))
}