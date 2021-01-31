const Celebrity = require("../models/celebrity.model");


// Iteration 2
module.exports.list = (req,res,next) =>{
Celebrity.find()
.then((celebrities) => res.render('celebrities/index',{celebrities}))
.catch ((e) => next(e))


};

//Iteration 3

module.exports.detail = (req,res,next) => {
    Celebrity.findById(req.params.id)
    .then ((celebrity) => res.render('celebrities/show',{celebrity}))
    .catch ((e) => next(e))

}