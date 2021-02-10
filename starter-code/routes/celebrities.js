const express = require('express');
const Celebrity = require('../models/Celebrity.model.js')

const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  
    Celebrity.find()
    .then((allCelebrities) => {
      console.log(allCelebrities)
      res.render("celebrities/index", {allCelebrities})
    }).catch(error => {
      console.log("No pudimos conseguir las celebridades")
      next(error)
    })

});

// Iteration #4: Adding New Celebrities
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
});

router.post('/celebrities/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body
  
  Celebrity.create({
    name, occupation, catchPhrase
  })
  .then((artistCreate) => {
  
    res.redirect('/celebrities')
  })
  .catch(error => {
    res.render('celebrities/new')
  })
});

// Iteration #3: The Celebrity Details Page
//Rutas con parámetros siempre van abajo
router.get('/celebrities/:artistId', (req, res, next) => {

  const id = req.params.artistId

  Celebrity.findById(id)
  .then((detailCelebrity) =>{
    res.render('celebrities/show', {celebrities : detailCelebrity})
  })
  .catch(error =>next(error))
});

//Iteration #5: Deleting Celebrities
router.post('/celebrities/delete/:id', (req, res, next) => {
  
  const id = req.params.id

  Celebrity.findByIdAndDelete(id)
  .then(() =>{
    res.redirect('/celebrities')
  })
  .catch((error)=> next(error))
});

//Iteration #6 (Bonus): Editing Celebrities
router.get('/celebrities/edit/:id', (req, res, next) => {

  const {id} = req.params

  Celebrity.findById(id)
  .then((celebritieToFindEdit) =>{
    console.log(celebritieToFindEdit)
    res.render('celebrities/edit', {celebrities : celebritieToFindEdit})
  })
  .catch(error => next(error))
});

router.post('/celebrities/edit/:id', (req, res, next) => {

  const {id} = req.params
  
  const {name, occupation, catchPhrase} = req.body

  Celebrity.findByIdAndUpdate(id, {name, occupation, catchPhrase}, {new:true})
  .then((artistActualizado) => {
    res.redirect(`/celebrities/${artistActualizado.id}`)})
  .catch(error => next(error))
});

module.exports = router;
