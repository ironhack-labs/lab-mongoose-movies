const express = require('express');
const router = express.Router();
const Celebrities = require("../models/celebrity")

/* GET home page */
/* Localhost:3000/ */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrities.find()
    .then(celebs => {
      res.render("celebrities/index", { celebs });
    })
    .catch(err => { console.log(err) })
});

router.get('/celebrities/add', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities/add', (req, res, next) => {
  console.log(req.body)
  const { name, occupation, catchphrase } = req.body
  const newCeleb = new Celebrities({ name, occupation, catchphrase })
  newCeleb.save()
  res.redirect("/celebrities")
});

router.get("/celebrities/:id/edit", (req, res) => {
  let celebrityEdit = req.params.id;
  Celebrities.findOne({ "_id": celebrityEdit })
    .then(celeb => {
      res.render("celebrities/edit", { celeb });
    })
})




router.post("/celebrities/:id/edit", (req, res) => {
  const { name, occupation, catchphrase } = req.body
  const celebId = req.params.id
  /* THIS IS THE SAME AS ABOVE
  const name = req.body.name
  const occupation = req.body.occupation
  const catchphrase = req.body.catchphrase 
  */
  Celebrities.updateOne({ _id: celebId }, { $set: { name, occupation, catchphrase } })
    .then(celebrity => {
      res.redirect("/celebrities")
    })
    .catch(err => console.log(err))
})



router.post('/celebrities/:id/delete', (req, res) => {
  let celebrityId = req.params.id;
  Celebrities.deleteOne({ '_id': celebrityId })
    .then(celebrity => {
      res.redirect('/celebrities')
    })
    .catch((error) => console.log(err))
})


router.get('/celebrities/:id', (req, res, next) => {
  let celebrityId = req.params.id
  Celebrities.findOne({ "_id": celebrityId })
    .then(celebs => {
      res.render("celebrities/celeb-details", { celebs });
    })
    .catch(err => { console.log(err) })
});




module.exports = router;
