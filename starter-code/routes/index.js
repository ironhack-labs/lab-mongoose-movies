const express = require('express');
const router  = express.Router();


const Celebrity = require('../models/celebrity.js');
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/homeCelebrities', async (req, res, next) => {
  try{
    let respuesta = await Celebrity.find()
    console.log(respuesta)
      res.render('homeCelebrities', {celebrities: respuesta });
  }catch(err){
      console.log('Error while getting the celebrities from the DB: ', err);
  }
});

router.get('/new', (req, res, next) => {
  res.render('new');
});

router.post('/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const newCelebrity = new Celebrity({name, occupation, catchPhrase});

  newCelebrity.save()
  .then((celebrity) => res.redirect('/homeCelebrities'))
  .catch((error) => res.render('new'));
});


router.get("/homeCelebrities/edit", (req, res, next) => {
  Celebrity.findOne({ _id: req.query.celebrities_id})
  .then((celebrity) => {
    res.render('edit', {celebrity});
  })
  .catch((err) =>{
    console.log(err)
  })
});

router.post("/homeCelebrities/edit", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.updateOne({ _id: req.query.celebrities_id }, { $set: { name, occupation, catchPhrase } }, { new: true })
  .then((celebrity)=>{
    
    res.redirect('/homeCelebrities');
  })
  .catch((error) =>{
    console.log(req.query, 'uhsciudcneojejopjef')
    console.log(error);
  });
});

router.post("/homeCelebrities/:celebritiesId", (req, res, next) => {

  Celebrity.findByIdAndRemove({_id: req.params.celebritiesId})
  .then((celebrity)=>{
    res.redirect('/homeCelebrities');
  })
  .catch((error) =>{
    console.log(error);
  });
});



router.get('/homeCelebrities/:celebritiesId', (req, res, next) => {
  Celebrity.findById(req.params.celebritiesId)
    .then(celebrity => {
      //console.log(celebrity, 'jsnvjksdbnv')
      res.render('show', { celebrities: celebrity });
    })
    .catch(error => {
      console.log('Error while retrieving celebrity details: ', error);
    })
});



module.exports = router;
