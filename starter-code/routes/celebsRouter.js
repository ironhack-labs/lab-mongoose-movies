const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');
const app_name = require('../package.json').name;
const debug = require('debug')(`${app_name}:indexRouter`);


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('home');
});


router.get('/celebrities', (req, res, next) => {
  debug(process.env.DEBUG);
  Celebrity.find().then(celebs => {
    res.render('celebrities/index', {celebs});
  })
  .catch((error)=> {
    console.log(error);
    res.render('/');
  });
});

router.get('/celebrities/:celebId/show', (req, res, next) => {
  debug(process.env.DEBUG);
  Celebrity.findById(req.params.celebId).then(celeb => {
    res.render('celebrities/show',{celeb})
  }).catch((error)=> {
    console.log(error);
    res.render('celebrities/index');
  });
});


router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {
  const celeb = {
    imgUrl: req.body.imgUrl,
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.create(celeb).then(cel => {
    console.log(`A celeb has born: ${cel._id} ${cel.name} with ${cel.occupation} occupation and: "${cel.catchPhrase}" phrase`);
    res.redirect('/celebrities');
  })
  .catch((error)=> {
    console.log(error);
    res.render('celebrities/new');
  });
});

router.get('/celebrities/:celebId/delete', (req,res) => {
  Celebrity.findByIdAndDelete(req.params.celebId).then(()=> {
    res.redirect('/celebrities');
  })
  .catch((error)=> {
    console.log(error)
    res.render('celebrities/:celebId/show');
  });
});

router.get('/celebrities/:celebId/edit', (req,res) => {
  Celebrity.findById(req.params.celebId).then(celeb => {
    res.render('celebrities/edit', {celeb})
  }).catch((error)=> {
    console.log(error);
    res.render('celebrities/:celebId/show');
  });
});


router.post('/celebrities/:celebId/edit', (req,res) => {
  const celeb = {
    imgUrl: req.body.imgUrl,
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  const celebId = req.params.celebId;
  Celebrity.findByIdAndUpdate(celebId, celeb).then(() => {
    //res.redirect(`/celebrities/${celebId}/show`);
    res.redirect('/celebrities');
  });
});




module.exports = router;
