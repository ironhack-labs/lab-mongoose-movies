const express = require('express');
const Celebrity = require('../models/Celebrity.model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Celebrity.find({})
    .then(celebrities => {
        console.log(celebrities)
        res.render('celebrities/index', {celebrities}) //{resultado del fin}
    })
    .catch((err) => {
        //next('error')
        console.error(err);
    })
})

router.get('/new', (req, res, next) =>{
    res.render('celebrities/new')
})
router.post('/new', (req, res) =>{
    const {name, occupation, catchPhrase} = req.body; //getting value from name form, occupation form
    Celebrity.create({name, occupation, catchPhrase})//name param model : form value name
    .then(()=>{
        res.redirect("/celebrities")
    })
    .catch(error =>{
        res.render('celebrities/new', { error }) //el segundo parametro siempre debe ser un obj
    })
})
router.get('/:id/edit', (req, res, next)=>{
    Celebrity.findById(req.params.id)
    .then(celebrity => {
        res.render('celebrities/edit', celebrity)
    })
    .catch(error => {
        next('error')
        console.error(error)
    })

})

router.post('/:id/delete', (req, res, next) =>{
    Celebrity.findByIdAndRemove(req.params.id)
    .then(() =>{
        res.redirect('/celebrities')
    })
    .catch(error =>{
        next('error')
        console.error(error);
    })
})

router.post('/:id', (req, res, next) =>{
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase})
    .then(() =>{
        res.redirect(`/celebrities/${req.params.id}`) //redirecciona a la ruta /celebrities/id
    })
    .catch(error => {
        next('error')
        console.error(error)
    })
})

router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id) //findbyId devuelve un objeto
    .then(celebrity => {
        res.render('celebrities/show', celebrity)
    })
    .catch(error => {
        //next('error')
        console.error(error)
    })

})



module.exports = router;