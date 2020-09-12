console.log('8. Iniciando configuración de rutas (en Index)')

module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/celebrities', require('./celebrities.routes.js'))
    app.use('/movies', require('./movies.routes.js'))

}