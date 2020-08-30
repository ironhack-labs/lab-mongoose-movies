const Celebrity = require("../models/Celebrity")


// C

exports.formCelebrity = (req, res) => { res.render ("celebrities/new") }

exports.createCelebrity = async (req, res) => {
    const { name, occupation, catchPhrase } = req.body
    if (name === "" || occupation === "" || catchPhrase === "") {
        return res.render("celebrities/new", { error: "Missing fields" })
    } else {
        await Celebrity.create({
            name,
            occupation,
            catchPhrase
        })
        res.redirect('/')
    }
}


// R

exports.callCelebrities = async (req, res, next) => {
    try {
        const allCelebs = await Celebrity.find()
        res.render("celebrities", {allCelebs}) 
    }
    catch(err){
        next(err)
    }
}

exports.celebritesDetails = async (req, res) => {
    const celeb = await Celebrity.findById(req.params.celebrityID)
    res.render("celebrities/show", celeb)
}


// U

exports.formUpdateCeleb = async (req, res) => { 
    const celebID = req.params.celebrityID
    const celeb = await Celebrity.findById(celebID)
    res.render ("celebrities/update", celeb)
}


exports.updateCelebrity = async (req, res) => {
    const { name, ocupation, catchPhrase } = req.body
    await Celebrity.findByIdAndUpdate(req.params.celebrityID, {
        name,
        ocupation,
        catchPhrase
    }, {new: true})
    res.redirect('/')
}


// D

exports.deleteCelebrity = async(req, res) => {
    const { celebrityID } = req.params
    await Celebrity.findByIdAndRemove(celebrityID)
    res.redirect('/')
}