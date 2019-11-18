const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.model')


// Get a list of the celebrities

router.get('/', (req, res) => {
  Celebrity.find()
    .then(allTheCelebrities => res.render('celebrities/celebritiesList', { celebrities: allTheCelebrities }))

    .catch(err =>( res.render("error" , err)))
});

// Get the details of a celebrity

router.get('/details/:id', (req, res) => {
  Celebrity.findById(req.params.id)
    .then(theCelebrity => res.render('celebrities/celebritiesDetails', { celebrity: theCelebrity }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

// Add a new celebrity

router.get('/newCelebrity', (req, res) => res.render('celebrities/newCelebrity'));

router.post('/newCelebrity', (req, res) => {

  const { name, occupation, catchPhrase } = req.body

  if (!name || !occupation || !catchPhrase) {
    res.render('celebrities/newCelebrity', { errorMessage: 'ERROR: Fill all the gaps' })
    return
  }

  Celebrity.findOne({ "name": name })
    .then(celeb => {
      if (celeb) {
        res.render("celebrities/newCelebrity", { errorMessage: "ERROR: The celebrity is already in the database" })
        return
      }

      Celebrity.create({ name, occupation, catchPhrase })
        .then(() => {
          res.redirect("/celebrities")
        })
        .catch(error => console.log(error))
    })
    .catch(error => { console.log(error) })
})

// Delete a celebrity

router.get('/delete', (req, res) => {
  const celebrityId = req.query.celebrityId
  Celebrity.findById(celebrityId)
    .then(theCeleb => res.render('celebrities/deleteCelebrity', theCeleb))
    .catch(err => console.log('error!!', err))
})

router.post('/delete', (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  const celebrityId = req.query.celebrityId

  Celebrity.findByIdAndRemove(celebrityId, { name, occupation, catchPhrase })
    .then(res.redirect('/celebrities'))
    .catch(err => console.log('error!!', err))

})


// Edit a celebrity

router.get('/edit', (req, res) => {
  const celebrityId = req.query.celebrityId
  Celebrity.findById(celebrityId)
    .then(theCeleb => res.render('celebrities/editCelebrity', theCeleb))
    .catch(err => console.log('error!!', err))
})

router.post('/edit', (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  const celebrityId = req.query.celebrityId


  Celebrity.findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
    .then(res.redirect('/celebrities'))
    .catch(err => console.log('error!!', err))

})




module.exports = router
