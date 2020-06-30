module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use("/celebridades", require("./celebrities.routes.js"));
    app.use("/peliculas", require("./movies.routes.js"));

}