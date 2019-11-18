const express = require('express');
const router = express.Router();

const Celebrity = require('./../models/Celebrity');

router.get('/:celebrityId/edit', (req,res,next) => {
  const {celebrityId} = req.params;
  Celebrity.findById(celebrityId)
    .then( (oneCelebrity) => res.render('./celebrities/edit',{oneCelebrity}))
    .catch( (err) => console.error(err));
});

router.post('/:celebrityId', (req,res,next) => {
  console.log('Estamos editando');
  const {celebrityId} = req.params;
  const {name,occupation,catchPhrase} = req.body;
  console.log(celebrityId);
  Celebrity.findByIdAndUpdate(celebrityId, {name,occupation,catchPhrase})
    .then( (updatedCelebrity) => {
      console.log('updated:',updatedCelebrity);
      res.redirect('/celebrities');
    })
    .catch( (err) => console.error(err));
});


router.post('/:celebrityId/delete', (req,res,next) => {
  const {celebrityId} = req.params;
  Celebrity.findByIdAndRemove(celebrityId)
    .then( (oneCelebrity) => res.redirect('/celebrities'))
    .catch( (err) => res.render(err));

});

router.post('/', (req,res,next) => {
  
 const {name,occupation,catchPhrase} = req.body;
 const celebrity = new Celebrity({name,occupation,catchPhrase});
 celebrity.save()
    .then(() => res.redirect('/celebrities')
    .catch( (err) => {
      console.log(err);
      res.redirect('celebrities/new');
    }))
  });

router.get('/new', (req,res,next) => {
  res.render('celebrities/new');
});



router.get('/:celebrityId', (req,res,next) => {
  const {celebrityId} = req.params;
  Celebrity.findById(celebrityId)
    .then( (oneCelebrity) => {
      res.render('celebrities/show',{oneCelebrity})
    })
    .catch( (err) => console.error(err))
})
//GET all celebrities
router.get('/', (req,res,next) => {
  Celebrity.find()
    .then( (allCelebritiesFromDb) => res.render('celebrities',{allCelebritiesFromDb}))
    .catch( (err) => console.error(err));
});

module.exports = router;