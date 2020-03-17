const express = require ('express');
const router = express.Router();
const Celebrity = require ('../models/Celebrity');

router.get('/', (req,res,next) =>{
  Celebrity.find()
  .then ( celebrities =>{
    res.render('celebrities/index', {celebrities: celebrities});
  })
  .catch(error =>{
    console.log('error :', error);
  })
});


router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
});


router.post('/new', (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchphrase })
  newCelebrity.save()
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch((error) => {
    console.log('error Adding Celebriti', error)
  })
});

router.post('/:id/delete', (req,res,next)=>{
  Celebrity
  .findByIdAndRemove(req.params.id)
  .then (() =>{
    res.redirect('/celebrities');
  })
  .catch(error =>{
    console.log('error :', error);
  })
})

router.get('/edit/:id', (req,res,next) =>{
  Celebrity
  .findById(req.params.id)
  .then(() =>{
    res.render('/celebrities/edit');
  })
})

// localhost:3000/celebrities/

router.get('/:id', (req,res,next)=>{
  Celebrity
  .findById(req.params.id)
  .then (celebrity => {
    console.log('celebrity :', celebrity);
    res.render('celebrities/show', celebrity);
  })
  .catch(error =>{
    console.log('error :', error);
  })
})


module.exports = router;