module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/', require('./celebrities.routes.js'))
    app.use('/', require('./movies.routes.js'))
}