//require model
const Celebrity = require("../models/Celebrity.model")

//Show celebrities
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

//Add celebrities
module.exports.new = (req,res,next) =>{
res.render('celebrities/new')
}


module.exports.addNew = (req,res,next) =>{
    Celebrity.create(req.body)
    .then(data => {
        console.log(`Celebrity added: ${data.name}`)
        res.redirect('/celebrities')
    })
    .catch(error => {
        console.log(`Error adding celebrity: ${error}`)
        res.redirect('/celebrities/new')
    }
)}
    
