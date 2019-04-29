const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/celebrities', (req, res, next) => {
  Celebrity.find().then (data => {
    
    // console.log(`This is the gathered data:`);
    // console.log(data);
    
    
    res.render('../views/celebrities/index', {data : data});
  })
  
  
});

router.get('/celebrities/delete/:id', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id).then (data => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    res.render ('../views/celebrities');
    console.log('Error while retrieving celeb details: ', error);
  })
  
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('../views/celebrities/new')
  });

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase} = req.body;
  const newCeleb = new Celebrity({  name, occupation, catchPhrase})
  newCeleb.save()
  .then((data) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
    res.redirect('/celebrities/new')
  })
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id).then (data => {
    console.log(`This is the selected celeb: ${data}`)
    res.render('../views/celebrities/show', data);
  })
  .catch(error => {
    res.render ('../views/celebrities/show');
    console.log('Error while retrieving celeb details: ', error);
  })
  
});










module.exports = router;