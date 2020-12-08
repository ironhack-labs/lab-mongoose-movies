const Celebrity = require("../models/celebrity")

const getCelebs = async (req, res) => {
    try {
        const celebrities = await Celebrity.find()
        console.log('celebrities', celebrities);
        res.render('celebrities', { celebrities })
        
    } catch (e) {
        console.error(e)
    }
}
const showCeleb = async (req, res) => {
    try{
    const { id } = req.params;
    const details = await Celebrity.findById(id);
    console.log('details', details)
    res.render('celebrities/show.hbs', details)
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
module.exports = { getCelebs, showCeleb, newCeleb, addCeleb, deleteCeleb}