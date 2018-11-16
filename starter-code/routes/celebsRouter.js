const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');
const app_name = require('../package.json').name;
const debug = require('debug')(`${app_name}:indexRouter`);


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/celebrities', (req, res, next) => {
  debug(process.env.DEBUG);
  Celebrity.find().then(celebs => {
    res.render('celebrities/index', {celebs});
  })
});

router.get('/celebrities/:celebId/show', (req, res, next) => {
  debug(process.env.DEBUG);
  Celebrity.findById(req.params.celebId).then(celeb => {
    res.render('celebrities/show',{celeb})
  })
});


router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/new', (req, res, next) => {
  const celeb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.create(celeb).then(cel => {
    console.log(`Se ha creado la celebrity ${cel._id} ${cel.name} with ${cel.occupation} occupation and: "${cel.catchPhrase}" phrase`);
    res.redirect('/celebrities');
  })
  .catch(()=> {
    res.render('celebrities/new');
  });
});

router.get('/celebrities/:celebId/delete', (req,res) => {
  Celebrity.findByIdAndDelete(req.params.celebId).then(()=> {
    res.redirect('/celebrities');
  })
  .catch(()=> {
    res.render('/celebrities/:celebId/show');
  });
});



module.exports = router;
