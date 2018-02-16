const express = require('express');
const Celebrity = require("../models/Celebrity.js")

const router = express.Router();


router.get('/', (req, res, next) => {
  console.log("AF!!!")
  Celebrity.find({}, (err, result) => {
    console.log("esto es lo que recibo de mi servidor")
    console.log(result)
    res.render("celebrities/index", {Celebrity:result})
  }).catch ( (err)=>{
    next();
    console.log(err);
  })
});


router.get('/new', (req, res, next) => {
  res.render("celebrities/new")
  next();

});

router.post('/', (req, res, next) => {
  const addCelebrity = new Celebrity ({
    name:req.body.name,
    occupation:req.body.occupation,
    catchPhrase:req.body.catchPhrase
  })
  addCelebrity.save();
  res.send(`<h2>Agregado!!</h2> <br /> <a href="/celebrities/">Ve a la lista de celebridades</a>`)
});

module.exports = router;
