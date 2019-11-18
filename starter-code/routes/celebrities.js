const express = require('express');
const router = express.Router();

const Celebrity = require('./../models/Celebrity');

//Get celebrities by ID
///celebrities/{{this._id}}"
router.get('/new', (req,res,next) => {
  res.render('celebrities/new');
});

router.post('/new', (req,res,next) => {
  const {name,occupation,catchPhrase} = req.body;
  const celebrity = new Celebrity({name,occupation,catchPhrase});
  celebrity.save()
    .then((celebrity) => res.redirect('/celebrities')
    .catch( (err) => {
      console.log(err);
      res.redirect('celebrities/new');
    }))});



router.get('/:celebrityId', (req,res,next) => {
  const {celebrityId} = req.params;
  console.log(celebrityId);
  Celebrity.findById(celebrityId)
    .then( (oneCelebrity) => {
      console.log(oneCelebrity);
      res.render('celebrities/show',{oneCelebrity})
    })
    .catch( (err) => console.error(err))
})
//GET all celebrities
router.get('/', (req,res,next) => {
  Celebrity.find()
    .then( (allCelebritiesFromDb) => res.render('celebrities',{allCelebritiesFromDb}))
    .catch( (err) => console.error(err));
})

module.exports = router;