const Celebrity = require("../models/Celebrity.model")

const getCelebs = async (req, res) => {
    try {
        const celebs = await Celebrity.find()
        res.render("./celebrities/index", { celebs })
    } catch (e) {
        console.error(e)
    }
}

const getCeleb = async (req, res) => {
    try{
    const { id } = req.params;
    const celebrity = await Celebrity.findById(id);
    res.render("celebrities/show", celebrity)
    } catch (e) {
        console.error(e)
    }
}

const newCeleb = async (req, res) => {
    try {
        res.render("celebrities/new")
    } catch(err){
        console.error(err)
    }
}

const addCeleb = async (req, res) => {
    try {
        const { name, occupation, catchPhrase } = req.body;
        const addCeleb = await Celebrity.create({ name, occupation, catchPhrase })
        const celebs = await Celebrity.find()
        res.render("celebrities/index", { celebs })
    } catch(err){
        console.error(err)
        res.render("celebrities/new")
    }
}

const deleteCeleb = async (req, res) =>{
    try {
        const { id } = req.params
        const removeCeleb = await Celebrity.findByIdAndDelete(id);
        res.redirect("/celebrities/");
    } catch (e) {
        console.error(e)
    }
}

const editCeleb = async (req, res) => {
    try {
        const { id } = req.params;
        const celebEddited = await Celebrity.findById(id);
        res.render("celebrities/edit", celebEddited)
    } catch (err) {
        console.error(e)
    }
}

const saveCeleb = async (req, res) => {
    try {
        const {id} = req.params
        const { name, occupation, catchPhrase } = req.body;
        const saveCeleb = await Celebrity.findByIdAndUpdate(id,{ name, occupation, catchPhrase }, {
      new: true,
    })
        const celebs = await Celebrity.find()
        res.render("celebrities/index", { celebs })
    } catch (err) {
        console.error(err)
    }
}


module.exports = { getCelebs, getCeleb, newCeleb, addCeleb, deleteCeleb, editCeleb, saveCeleb }