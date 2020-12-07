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
    res.render('/celebrities/show', details)
    } catch (e) {
        console.error(e)
    }
}
module.exports = { getCelebs, showCeleb }