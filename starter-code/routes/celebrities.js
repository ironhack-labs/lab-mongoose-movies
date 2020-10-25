const express = require('express');
const router  = express.Router();
var Celebrity = require('../models/celebrity.js')

router.get('/', async (req, res, next) => {
    try{
      let all = await Celebrity.find()
      //console.log('Retrieved celebrities from DB:', respuesta);
        res.render('celebrities/index', {all});
    }catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
});


router.get('/add', (req, res, next) => {  
    res.render('celebrities/new');   
});

router.post('/', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    console.log(req.body)
    const newCeleb = new Celebrity({name, occupation, catchPhrase});
    console.log(newCeleb)
  newCeleb.save()
    .then((book) => {
      res.redirect('/');
    })
    .catch((error) => {
      //console.log(error);
    })
});

router.get('/:id/edit', async (req, res, next) => {
  try{
     let celeb = await Celebrity.findById(req.params.id)
      console.log('Retrieved celebrities from DB:', req.params.id);
      res.render('celebrities/edit', {celeb});
  }catch(err){
      console.log('Error while getting the celebrity: ', err);
  }
});

router.post('/:id', async (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.updateOne(
  { _id: req.params.id },
  { $set: { name, occupation, catchPhrase } }
)
  .then((book) => {
    console.log(req.query)
    res.redirect("/celebrities");
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/:id', async (req, res, next) => {
  try{
    let celeb = await Celebrity.findById(req.params.id)
    //console.log('Retrieved celebrities from DB:', celeb);
      res.render('celebrities/show', {celeb});
  }catch(err){
      console.log('Error while getting the celebrity: ', err);
  }
});

router.post('/:id/delete', async (req, res, next) => {
  try{
     let celeb = await Celebrity.findByIdAndRemove(req.params.id)
      console.log('Retrieved celebrities from DB:', req.params.id);
      res.redirect('/');
  }catch(err){
      console.log('Error while getting the celebrity: ', err);
  }
});





module.exports = router;