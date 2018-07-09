const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}).then( celebrities => {
    res.render('celebrities/index', {celebrities});
  })
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});
router.post('/celebrities/new', (req, res, next) => {
  const {name,occupation,catchPhrase} = req.body;
  new Celebrity({name,occupation,catchPhrase})
  .save().then( celebrity => {
    console.log("Celebrity sucessfully created!");
    res.redirect('/celebrities');
  });
});

router.get('/celebrities/edit/:id', (req,res) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render('celebrities/edit',{celebrity});;
  })
})

router.post('/celebrities/edit/:id', (req,res) => {
  const {name,occupation,catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(req.params.id,{name,occupation,catchPhrase})
      .then( celebrity => {
        res.redirect('/celebrities')
      })
})

router.get('/celebrities/delete/:id',(req,res) => {
  Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));
})

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("celebrities/show", { celebrity });
  });
});

module.exports = router;