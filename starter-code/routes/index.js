const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//celebs: iteration 2. listing our celebrities.
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(allTheCelebritiesFromDB => {
      console.log('Retrieved celebrities from DB:', allTheCelebritiesFromDB);
      res.render('celebrities/index', { celebrities: allTheCelebritiesFromDB } );
  })
  .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
  })
})

//celebs: iteration 4. adding new celebrities.
//metodo post
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
})

//celebs: iteration 4. adding new celebrities.
//metodo post
router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase })
  newCelebrity.save()
  .then((newCeleb) => {
      console.log('The new celebrity is: ', newCeleb);
      res.redirect('/', { celebrities: newCeleb } );
  })
  .catch((error) => {
    console.log('Error while getting the celebrities from the DB: ', error);
    res.render('celebrities/new');
  })
});

//celebs: iteration 5. deleting celebrities.
router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findOneAndDelete(req.params.id)
  .then((deleteCeleb) => {
    res.redirect('celebrities/index', { deleteCeleb });
  })
  .catch((error) => {
    console.log('Error while deleting the celebrities from the DB: ', error);
  })
})

//celebs: iteration 3. celebrities details page. 
router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then( (celebrity) => {
  console.log(celebrity)
  res.render('celebrities/show', {celebrity})
  })
  .catch( (error) => {
  next(error)
  })
});

module.exports = router;
