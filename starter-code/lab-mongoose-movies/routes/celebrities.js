const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
 Celebrity.find()
  .then((celebrities) => {
    res.render('../views/celebrities/index.ejs', {"title": "Celebrities IH : Celebrities", "celebrities": celebrities})
  })
  .catch((error) => {
    console.log('Error reading celebrities.js',error)
  })
});

// Create Celebrity
router.get('/new', (req, res, next) => {
  console.log('celebrities/add aqui estoy')
  res.render('../views/celebrities/new.ejs', {"title": 'Celebrities IH : Add new Celebrity'})
})

router.post('/', (req, res, next) => {
  const celebrity = req.body
  Celebrity.create(celebrity)
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
})

// Edit Celebrity
router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/edit', {"title": 'Celebrities IH : Edit Celebrity', "celebrity": celebrity })
    })
})

router.post('/:id', (req, res, next) => {
  const celebrity = req.body;
  const id = req.params.id;
  Celebrity.findByIdAndUpdate(id, celebrity)
    .then((result) => {
      res.redirect(`/celebrities/${id}`);
    })
    .catch((error) => {
      console.log(error)
    })
});

// Delete Celebrity
router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id
  Celebrity.findByIdAndDelete(id)
    .then((result) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error)
    })
});




router.get('/:id', (req, res) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/show', {"title": `Celebrities IH : ${celebrity.name}`, "celebrity": celebrity})
    })
})


module.exports = router;
