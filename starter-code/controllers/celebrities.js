const Celebrity = require("../models/Celebrity")

exports.callCelebrities = async(req, res, next) => {
    try {
        const allCelebs = await Celebrity.find()
        res.render("/celebrities", allCelebs)
    } catch (err) {
        next(err);
    }
}

exports.celebritesDetails = async(req, res, next) => {
    const celeb = await Celebrity.findById(req.params.celebrityID)
    res.render("celebrities/show", celeb)
}

exports.formCelebrity = async(req, res) => {
    res.render('celebrities/new');
}

exports.createCelebrity = async(req, res) => {
    const { name, ocupation, catchPhrase } = req.body
    if (name === "" && )
        await Celebrity.create({ name, ocupation, catchPhrase })
}

exports.updateCelebrity = async(req, res) => {
    const { name, ocupation, catchPhrase } = req.body
    const { celebId } = req.params
    await Celebrity.findByIdAndUpdate(celebId, {
        name,
        ocupation,
        catchPhrase
    })
}

exports.deleteCelebrity = async(req, res) => {
    const { celebId } = req.params
    await Celebrity.findByIdAndRemove(celebId) {
        name,
        ocupation,
        catchPhrase
    })
}

exports.deleteCelebrity = async(req, res) => {
    const { celebId } = req.params
    await Celebrity.findByIdAndRemove(celebId) {
        name,
        ocupation,
        catchPhrase
    })
}

exports.deleteCelebrity = async(req, res) => {
const { celebId } = req.params
await Celebrity.findByIdAndRemove(celebId)
} {
name,
ocupation,
catchPhrase
})
}

exports.deleteCelebrity = async(req, res) => {
const { celebId } = req.params
await Celebrity.findByIdAndRemove(celebId)
} {
name,
ocupation,
catchPhrase
})
}

exports.deleteCelebrity = async(req, res) => {
    const { celebId } = req.params
    await Celebrity.findByIdAndRemove(celebId)
}
resres.render "" === ""       {
            name,
            ocupation,
            catchPhrase
        })
}

exports.deleteCelebrity = async (req, res) =>{
    const {celebId} = req.params
    await Celebrity.findByIdAndRemove(celebId)
}       {
            name,
            ocupation,
            catchPhrase
        })
}

exports.deleteCelebrity = async (req, res) =>{
    const {celebId} = req.params
    await Celebrity.findByIdAndRemove(celebId)
}