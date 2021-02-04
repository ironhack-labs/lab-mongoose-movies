//require model
const Celebrity = require("../models/Celebrity.model")


module.exports.list = (req,res,next) =>{
    Celebrity.find(
        req.query.name ? {name: { $regex: req.query.name, $options: "i" }} : {}
    )
        .then(data => {
            res.render('celebrities/index', {
                celebrities: data, 
                celebrity_search: req.query.name
            })
        })
        .catch (e => next(e))
}
