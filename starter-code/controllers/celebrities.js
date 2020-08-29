const Celebrity = require("../models/Celebrity")

//List
exports.callCelebrities = async(req, res, next) => {
    try {
        const allCelebs = await Celebrity.find()
        res.render("celebrities/index", {
            allCelebs
        })
    } catch (err) {
        next(err);
    }
}


//Create
exports.formCelebrity = async(req, res) => {
    res.render('celebrities/new');
}

exports.createCelebrity = async(req, res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body
    if (name === "" || occupation === "" || catchPhrase === "") {
        res.render("celebrities/new", {
            error: "Missing fields"
        })
    } else {

        await Celebrity.create({
            name,
            occupation,
            catchPhrase
        })
        res.redirect('/')
    }
}

//Details
exports.celebritesDetails = async(req, res, next) => {
    const celeb = await Celebrity.findById(req.params.celebrityID)
    res.render("celebrities/show", celeb)
}


//Update
exports.formUpdateCeleb = async(req, res) => {
    const celebrity = await Celebrity.findById(req.params.celebrityID);
    res.render('celebrities/edit', celebrity)
}

exports.updateCelebrity = async(req, res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body
    const {
        celebrityID
    } = req.params

    let obj = await Celebrity.findByIdAndUpdate(celebrityID, {
        name,
        occupation,
        catchPhrase
    }, {new: true})
    
    res.redirect('/')
}


//Delete
exports.deleteCelebrity = async(req, res) => {
    const {
        celebrityID
    } = req.params
    await Celebrity.findByIdAndRemove(celebrityID)
    res.redirect('/')
}