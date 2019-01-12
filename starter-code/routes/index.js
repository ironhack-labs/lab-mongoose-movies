const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities", (req, res) =>{
  Celebrity.find()
  .then(celebrities =>{
    res.render('../views/celebrities/index.hbs', {celebrities})
  })
  .catch(err =>{
    console.log(err)
  })
})


router.get("/celebrities/new", (req, res)=>{
  res.render("../views/celebrities/new");
})

router.post("/celebrities/new",(req,res) =>{
  const {name, occupation, catchPhrase} = req.body
  const newArtist = new Celebrity ({name, occupation, catchPhrase})
  newArtist.save()
  .then((celebrity) =>{
    res.redirect('/index')
  })
  .catch((err)=>{
    console.log(err);
    res.render("../views/error")
  })
})


router.get("/celebrities/:id", (req, res) =>{
  let celebrityId = req.params.id
  console.log(celebrityId);
  Celebrity.findOne({'_id': celebrityId})
  //.populate("author")
  .then((celebrity)=>{
    res.render('../views/celebrities/show', { celebrity })
  })
  .catch((err)=>{
    console.log(err);
  })
})

module.exports = router;
