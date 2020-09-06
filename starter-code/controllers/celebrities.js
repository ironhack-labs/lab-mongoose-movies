const Celebrity = require("../models/Celebrity")

exports.callCelebrities = async(req, res, next) => {
    try {
        const allCelebs = await Celebrity.find()
        res.render("celebrities/index", {
            allCelebs
        })
    } catch (err) {
        next();
        console.log(err);
    }
}

exports.celebritiesDetails = async(req, res, next) => {
    try {
        const celeb = await Celebrity.findById(req.params.celebrityID)
        res.render("celebrities/show", celeb)
    } catch (err) {
        next();
        console.log(err);
    }
}

exports.formCelebrity = async(req, res) => {
    res.render('celebrities/new');
}

exports.createCelebrity = async(req, res, next) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body;

    if (name === "" || occupation === "" || catchPhrase === "") {
        res.render("celebrities/new", {
            error: "Missing fields"
        })
    } else {
        try {
            await Celebrity.create({
                name,
                occupation,
                catchPhrase
            })
            res.redirect('/celebrities')
        } catch (err) {
            next();
            console.log(err)
        }
    }
}

exports.formUpdateCeleb = async(req, res, next) => {
    try {
        const celebrity = await Celebrity.findById(req.params.celebrityID);
        res.render('celebrities/edit', celebrity)
    } catch (err) {
        next();
        console.log(err)
    }
}

exports.updateCelebrity = async(req, res) => {
    try {
        const {
            name,
            occupation,
            catchPhrase
        } = req.body
        const {
            celebrityID
        } = req.params
        await Celebrity.findByIdAndUpdate(celebrityID, {
            name,
            occupation,
            catchPhrase
        })
        res.redirect(`/celebrities`)
    } catch (err) {
        next();
        console.log(err);
    }
}

exports.deleteCelebrity = async(req, res, next) => {
    try {
        const {
            celebrityID
        } = req.params;
        await Celebrity.findByIdAndRemove(celebrityID);
        res.redirect('/celebrities');
    } catch (err) {
        next();
        console.log(err);
    }
}