module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/celebrities',require('./celebrities.routes.js'))
    app.use('/movies',require('./movies.routes.js'))
    app.use('/search',require('./search.routes.js'))
}