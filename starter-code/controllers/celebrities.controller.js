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

module.exports.show = (req,res,next) =>{
    Celebrity.findById(req.params.id)
        .then(data => {
            res.render('celebrities/show', { ...data.toJSON(), delete: false })
        })
        .catch(e => next(e))
}
