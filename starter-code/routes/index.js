module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/celebrities', require('./celebs.routes'))
    app.use('/movies', require('./movies.routes.js'))

}