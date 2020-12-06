const Celebrity = require('../models/Celebrity');
const Celebrities = require('../models/Celebrity')

const getCelebs = async (req, res) => {
    try {
        const celebrities = await Celebrities.find();
        console.log('show me celebrities!!!! ', celebrities)
        res.render('celebrities', {celebrities}) 
    } catch (err) {
        console.log(err)
    }
}

const celebDetails = async (req, res) => {
    try {
        const {id} = req.params
        const details = await Celebrities.findById(id);
        console.log('show me now details!!!! ', details)
        res.render('celebrityDetail', details)
    } catch (err) {
        console.log(err)
    }
}

const newCelebView = async (req, res) => {
    try {
        res.render('new')
    } catch (err) {
        console.log('There is an error !!!!!',err)
    }
}

const createCeleb = async (req, res) => {
    // BUG: cuando hago refresh de la página /celebrities luego de haber creado la new celebrity, me crea el mismo objeto las veces que hago refresh
    try {
        await Celebrities.create(req.body)
        console.log('This is the req.body !!!',req.body)
        const celebrities = await Celebrities.find()
        res.render('celebrities', {celebrities})
    } catch (err) {
        console.log(err)
    }
}

const deleteCeleb = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        await Celebrities.findByIdAndRemove(id)
        const celebrities = await Celebrities.find()
        res.render('celebrities', {celebrities})
    } catch (err) {
        console.log('There is an error!',err)
    }
}

const editCelebView = async (req, res) => {
    try {
        const { id } = req.params
        const celeb = await Celebrities.findById(id)
        console.log(celeb)
        console.log('el ID es:',id)
        res.render('edit', celeb)
    } catch (err) {
        console.log('Errror in editCeleb !!!', err)
    }
}

const updateCeleb = async (req, res) => {
    try {
        const { id } = req.params
        const newCeleb = req.body // recogemos la información en body porque el formulario tiene método POST
        console.log('el ID desde updateCeleb es:', id)
        console.log('celebrity a cambiar:', newCeleb)
        const updateCelebrity = await Celebrities.findByIdAndUpdate(id, newCeleb)
        console.log('celebrity update: ',updateCelebrity)
        const celebrities = await Celebrities.find()
        res.render('celebrities', {celebrities})
    } catch (err) {
        console.log('There is an error in updateCeleb !!!!', err)
    }
}

module.exports = {
    getCelebs,
    celebDetails,
    newCelebView,
    createCeleb,
    deleteCeleb,
    editCelebView,
    updateCeleb
}