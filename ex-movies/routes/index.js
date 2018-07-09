const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities' , (req, res, next) => {
  Celebrity.find({}).then( celebs => {
    console.log(celebs);
    res.render('celebrity/index', {celebs});
});
});

router.get('/celebrities/:id' , (req, res, next) => {
  Celebrity.findById(req.params.id).then(celeb => {
    res.render('celebrity/details',{celeb});;
  })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrity/new');
});

router.post('/celebrities/new', (req,res) => {
  const { name, occupation, catchPhrase} = req.body;
  new Celebrity({name,occupation,catchPhrase})
  .save().then(celeb => {
    res.redirect('celebrity/index');
  });
})

router.get('/celebrities/delete/:id',(req,res) => {
  Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));
})

module.exports = router;
