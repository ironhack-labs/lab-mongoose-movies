var express = require('express');
var router = express.Router();

const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("new")  
});

router.get('/celebrities', (req, res, next) => {
Celebrity.find({})
    .then(celebrities => {
    res.render('celebrities', { celebrities: celebrities });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    }) 
});

router.post('/celebrities', (req, res, next) => {
    let name = req.body.name
    let occupation = req.body.occupation
    let catchPhrase = req.body.catchPhrase
   Celebrity.create({ 
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  })
  .then(celeb => { 
    res.redirect('celebrities')
    console.log('The celebrity is saved and its value is: ', celeb) })
  .catch(err => { console.log('An error happened:', err) });
  });

router.get("/celebrities/:id", (req, res, next) => {
  let id = req.params.id;
  Celebrity.findById(id)
    .then(foundCeleb => {
      res.render("show", {foundCeleb: foundCeleb});
    })
    .catch(err => {
      console.log("err");
    });
});




module.exports = router;
