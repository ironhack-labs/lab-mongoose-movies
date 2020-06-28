const express = require('express');
const router = express.Router();

const Celebrity = require('./../models/celebrity.model.js')

/* GET home page */


router.get('/', (req, res, next) => {
  res.render('index');
});

//CELEBRITIES//


router.get('/celebrities', (req, res) => {

  Celebrity
    .find()
    .then(allcelebrities => res.render('celebrities', {
      allcelebrities
    }))
    .catch(err => console.log("Error en la BBDD", err))

})

//CELEBRITY DETAILS//

router.get("/details/:celebrityId", (req, res) => {

  Celebrity
    .findById(req.params.celebrityId)
    .then(theCelebritie => res.render('celebrities-details', theCelebritie))
    .catch(err => console.log("Error en la BBDD", err))
})


//CREATE CELEBRITY//


router.get('/new', (req, res) => {

  res.render('new-form')

})

router.post('/new', (req, res) => {

  const {
    name,
    occupation,
    catchPhrase
  } = req.body


  Celebrity

    .create({
      name,
      occupation,
      catchPhrase
    })
    .then(() => res.redirect('celebrities'))
    .catch(err => console.log("Error en la BBDD", err))

})

//DELETE CELEBRITY//

router.get("/delete/:celebrityId", (req, res) => {

  Celebrity

    .findByIdAndRemove(req.params.celebrityId)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log("Error en la BBDD", err))
})

//EDIT CELEBRITY//


router.get('/edit/', (req, res) => {

  Celebrity

    .findById(req.query.celebrityId)
    .then(celebrity => res.render('new-edit', celebrity))
    .catch(err => console.log(err))

})

router.post('/edit/:celebrityId', (req, res) => {

  const {
    name,
    occupation,
    catchPhrase
  } = req.body


  Celebrity

    .findByIdAndUpdate(req.params.celebrityId, {
      name,
      occupation,
      catchPhrase,

    }, {
      new: true

    })

    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log("Error en la BBDD", err))

})




module.exports = router;