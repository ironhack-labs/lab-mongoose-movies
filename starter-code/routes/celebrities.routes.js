const express = require('express')
const router = express.Router()


const Celebrity = require('../models/Celebrity')

router.get('/', (req, res, next) => { // ESTO ES EL CONTROLADOR
    Celebrity.find()                                                         // ESTO ES EL MODELO
    .then(allCelebrities => res.render('celebrities', {celebrities: allCelebrities }))  // ESTO ES LA VISTA
    .catch(error => console.log(error))

})


//Add

router.get('/add', (req, res) => res.render('celebrity-add'))
router.post('/add', (req, res) => {
    const { name, occupation, catchPhrase} = req.body
    const newCelebrity = new Celebrity({name, occupation, catchPhrase})
    newCelebrity.save()
    .then(theCelebrity => res.redirect('/celebrities'))
    .catch(error => console.log(error))
})
//Details
router.get('/:celebrities_id', (req, res) => {
    
    if (!/^[0-9a-fA-F]{24}$/.test(req.params.celebrities_id)) {
        return res.status(404).render('not-found');
    }
    
    Celebrity.findById(req.params.celebrities_id)
    // nombre del campo a popular
    .then(data => res.render('celebrity-details', data))
    .catch(error => console.log(error))
})


//Delete

router.post('/:id/delete', (req, res) => {
    Celebrity.findByIdAndRemove({_id: req.params.id})
    // nombre del campo a popular
    .then(data => {res.redirect('/celebrities')})
    .catch(error => console.log(error))
})
module.exports = router

//Edit

router.get('/:id/edit', (req, res) => {
    Celebrity.findById({ _id: req.params.id })
      .then(editCelebrity => res.render("celebrity-details-edit", { celebrityfornew :editCelebrity}))
      .catch(error => console.log(error))
  })
  
  router.post('/:id', (req, res) => {
    console.log(req.params.id)
    const {name, occupation, catchPhrase } = req.body
    console.log(name)
    Celebrity.update({ _id: req.params.id }, { $set: { name, occupation, catchPhrase } })
      .then(newCelebrity => res.redirect(`/celebrities`))
      .catch(error => console.log(error))
  
})

module.exports = router