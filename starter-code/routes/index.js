const express = require('express');
const router  = express.Router();
const Celebritie = require('../models/Celebritie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET all celebrities */
router.get('/celebrities', (req, res, next) => {
  Celebritie.find({}).then( celeb => {
    res.render('celebs/celebrities', {celeb});
  })
});

/* GET create page */
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebs/new');
});

/* GET Celebritie by Id */
router.get('/celebrities/:id', (req, res, next) => {
  Celebritie.findById(req.params.id).then( celeb => {
    res.render('celebs/detail', {celeb});
  })
});


/* POST a new Celebritie to DB */
router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase} = req.body;
  console.log(req.body);
  Celebritie.create({ name, occupation, catchPhrase})
    .then( celeb => {
    console.log("Celebritie sucessfully created!");
    res.redirect('/celebrities');
  });
});

/* GET edit Celebritie page*/
router.get('/celebrities/:id/edit', (req,res) => {
  Celebritie.findById(req.params.id).then(celeb => {
    res.render('celebs/new',{celeb});;
  })
})

/* POST to update a Celebritie in DB */
router.post('/celebrities/:id/edit', (req,res) => {
  const { name, occupation, catchPrase} = req.body;
  Celebritie.findByIdAndUpdate(req.params.id,{ name, occupation, catchPrase})
      .then( celeb => {
        console.log(`Celebritie ${celeb.name} succesfully updated`)
        res.redirect('/celebrities')
      })
})

/* Get delete Celebritie from DB */
router.get('/celebrities/:id/delete',(req,res) => {
  Celebritie.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));
})

module.exports = router;
