const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')

/* =============GET home page =============*/
router.get('/', (req, res, next) => {
  res.render('index');
});


//================GET celebrities===================
router.get('/celebrities/', (req, res, next) => {
  Celebrity.find().then(celebrities => {
    res.render("celebrities", { celebrities });
  })
});

router.get('/celebrities/new', (req, res, next) => {

  res.render("celebrities/new");
});




//Post New Celeb
router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase })
  newCeleb.save()
    .then((celebrities) => {
      res.redirect("/celebrities")
    })
})


// //* http://localhost:3000/ celbrities / delete ? 5cc71f22c9aa882a4df7386e



router.get('/celebrities/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.query.id)
    .then((celebrities) => {
      res.redirect("/celebrities")
    })
})

router.get('/celebrities/edit', (req, res, next) => {
  Celebrity.findById(req.query.id)
    .then((celebrity) => {
      res.render("celebrities/edit", { celebrity });
    })
    .catch((error) => {
      console.log(error);
    })
});


router.post('/celebrities/edit', (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.query.id, req.body)
    .then((celebrities) => {
      res.redirect("/celebrities")
    }).catch(err => console.error(err))
})


router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrities) => {
      res.render("celebrities/show", { celebrities })
    })
})





module.exports = router;
