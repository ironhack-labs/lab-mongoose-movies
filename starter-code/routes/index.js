const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* CELEBRITIES */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebsFromDB => {
    //console.log('movies from DB:', celebsFromDB);
    res.render('celebrities', {celebrities: celebsFromDB});
  })
  .catch(error => {
    console.log('Error while getting movies from DB:', error);
  })
});
/* ADD CELEBS */
router.get('/new', (req, res) => {
  //console.log('newasdfadsf')
  res.render('celebrities/new');
});


/*DELETE */
router.post('/:celebId/delete', (req,res,next) => {
  Celebrity.findByIdAndRemove(req.params.celebId)
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch(error => {
    console.log('Error while retrieving celeb details: ', error);
  })
});

/*MORE INFO */
router.get('/celebrities/:celebId', (req, res, next) => {
  Celebrity.findById(req.params.celebId)
  .then(theCeleb =>{
    res.render('celebrities/show', {celeb: theCeleb});
  })
  .catch(error => {
    console.log('Error while retrieving celeb details: ', error);
  })
});

router.post('/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase});
  newCeleb.save()
  .then((celeb) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
