module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/celebrities', require('./celeb.routes.js'))
    app.use('/movies', require('./movie.routes.js'))
}