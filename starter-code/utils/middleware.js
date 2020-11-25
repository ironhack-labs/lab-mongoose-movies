function myCustomMiddleware(req, res, next) {
    console.log("....");
    console.log("Hi");
    //res.send();
    next();
}

module.exports = myCustomMiddleware;