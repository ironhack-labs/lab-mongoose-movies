const express = require('express');
const router = express.Router();
const Celebrities = require('../models/celebrities')

// Render the Index //

router.get('/celebrities/index', (req, res) => {
  Celebrities.find()
    .then(allcelebreties => {
      res.render('celebrities', { celebrities: allcelebreties })
    })
    .catch(error => {
      console.log('Error while retrieving the entries', error)
    })
})


// Render the Celebrities //

router.get('/celebrities/celebrity/:celebrityId', (req, res) => {
  let celebrity = req.params.celebrityId
  Celebrities.findById(celebrity)
    .then(celebrity => {
      res.render('celebrities/celebrity', { celebrities: celebrity })
    })
    .catch(error => {
      console.log('error retrieving the celebrity details', error)
    })
})


// Render the Add Celebrities//


router.get('/celebrities/add', (req, res) => {
  res.render('celebrities/add')
})

// Post new Celebrities in the Database//

router.post('/celebrities/add', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrities({ name, occupation, catchPhrase });
  newCelebrity.save()
    .then((celebrity) => {
      res.redirect('/celebrities/index')
    })
    .catch((error) => {
      console.log(error);
    })
})

// Delete Celebrities from DB //

router.post('/celebrities/:id/delete', (req, res) => {
  let celebrity = req.params.id
  console.log(celebrity)
  Celebrities.findByIdAndDelete(celebrity)
    .then((celebrity) => {
      res.redirect('/celebrities/index')
    })
    .catch((error) => {
      console.log(error);
    })
})

// Render the edit view //

router.get('/celebrities/:id/edit', (req, res) => {
  let celebrity = req.params.id
  console.log(celebrity)
  Celebrities.findById(celebrity)
    .then(celebrity => {
      res.render('celebrities/edit', { celebrities: celebrity })
    })
    .catch(error => {
      console.log('error retrieving the book details', error)
    })
})


// Post updates on celebrities //

router.post('/celebrities/update', (req, res) => {
  let celebrity = req.query.celebrity_id
  const { name, occupation, catchPhrase } = req.body;
  Celebrities.update({ _id: celebrity }, { $set: { name, occupation, catchPhrase } })
    .then(celebrity => {
      res.redirect('/celebrities/index')
    })

})





module.exports = router;