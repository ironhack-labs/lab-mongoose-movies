const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celeb => {
      console.log("CONSOLE LOOOOOG",celeb)
  res.render('celebrities', {
    celeb: celeb
  });
})
  })
;

router.get('/celebrities/:celebId', (req, res, next) => {
  let celebId = req.params.celebId
  Celebrity.findById(celebId)
  .populate()
  .then(celeb => {
    res.render("celeb-details", {celeb: celeb})
  })
})

router.get('/add-new', (req, res, next) => {
  res.render('add-new')
})

router.get('/delete/:celebId', (req, res, next) => {
  let celebId = req.params.celebId
  Celebrity.findByIdAndDelete(celebId)
  .then(celeb => {
    res.redirect("/celebrities")
  })
})
router.post('/add-new', (req, res, next) => { 
let {name, occupation, catchphrase} = req.body
Celebrity.create({name, occupation, catchphrase})
.then(newCeleb => {
  console.log('the new id',newCeleb._id)

res.redirect("/celebrities")
})
.catch(() => {
  console.log('add new failure')
  res.redirect("/add-new")
})
})