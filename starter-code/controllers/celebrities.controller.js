const Celebrity = require("../models/celebrity.model");

// Iteration 2
module.exports.list = (req,res,next) =>{
Celebrity.find()
.then((celebrities) => res.render('/celebrities/index',{celebrities}))
.catch ((e) => next(e))


};