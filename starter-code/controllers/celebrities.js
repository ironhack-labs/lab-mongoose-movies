const Celebrity = require("../models/celebrity")

const getCelebs = async (req, res) => {
    try {
        const celebrities = await Celebrity.find()
        console.log(celebrities);
        res.render("./celebrities/index", { celebrities })
    } catch (e) {
        console.error(e)
    }
}
const showCeleb = async (req, res) => {
    try{
    const { id } = req.params;
    const celebrity = await Celebrity.findById(id);
    res.render("celebrities/show", celebrity)
    } catch (e) {
        console.error(e)
    }
}
module.exports = { getCelebs, showCeleb }