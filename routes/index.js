module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use("/famosas", require("./celebrities.routes.js"));
    app.use("/pelis", require("./movies.routes.js"));

}