const express = require('express');
const router  = express.Router();

const Celeb = require('../models/Celeb');

router.get('/', (req, res, next) => {
  Celeb.find({}).then( celebrities => {
    res.render('celebs/index', {celebrities});
  })
});

router.get('/new', (req, res, next) => {
  res.render('celebs/new');
});

router.post('/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  new Celeb({name, occupation, catchPhrase})
  .save().then( celebrity => {
    console.log("Celebritie sucessfully created!");
    res.redirect('/celebrities');
  });
});

/* CR(U)D: Update the book, show update form  */
router.get('/edit/:id', (req,res) => {
  Celeb.findById(req.params.id).then(celebrity => {
    res.render('celebs/edit',{celebrity});;
  })
})

/* CR(U)D: Update the book in DB */
router.post('/edit/:id', (req,res) => {
  const {name, occupation, catchPhrase} = req.body;
  Celeb.findByIdAndUpdate(req.params.id,{name, occupation, catchPhrase})
      .then( celebrity => {
        res.redirect('/celebrities')
      })
})


router.get('/delete/:id',(req,res) => {
  Celeb.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));
})


router.get('/celebrity/:id', (req, res, next) => {
  Celeb.findById(req.params.id).then( celebrity => {
    res.render('celebs/show', {celebrity});
  })
});

module.exports = router;
