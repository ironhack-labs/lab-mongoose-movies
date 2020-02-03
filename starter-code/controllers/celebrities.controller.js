const Celebrity = require('../models/Celebrity')

exports.celebritiesList = async (req, res , next) => {
    const listCelebrities = await Celebrity.find().catch(err => console.log(err))
    res.render('celebrities/celebrities', {listCelebrities}) 
}

exports.celebritieShow = async (req, res, next) => {
    const celebritie = await Celebrity.findById(req.params.id).catch(err=>console.log(err))
    res.render('celebrities/celebritieShow', {celebritie})
}

exports.celebritieAddGet = async (req, res, next) => {
    res.render('celebrities/newCelebritie')
}

exports.celebritieAddPost = async (req,res,next) => {
    const {name, occupation,catchPrase} = req.body
    const newCelebritie = {name,occupation,catchPrase}

    await Celebrity.create( newCelebritie )
        .then( res.redirect('/celebrities'))
        .catch( err => console.log(err) )
}

exports.celebritieDelete = async (req,res,next) => {
    await Celebrity.findByIdAndDelete( req.params.id )
        .catch(err => console.log(err))
    res.redirect('/celebrities')
}

exports.celebritieEditGet = async (req,res,post) => {
    const celebritie = await Celebrity.findById(req.params.id)
        .catch(err => console.log(err))
    console.log(celebritie)
    res.render('celebrities/celebritieEdit', {celebritie})
}

exports.celebritieEditPost = async (req,res,next) => {
    const id = req.params.id
    const {name, occupation, catchPhrase} = req.body
    const newValues = {name, occupation, catchPhrase}
    await Celebrity.findByIdAndUpdate(id, newValues)
        .catch(err => console.log(err))
    res.redirect(`/celebrities/${id}`)

}