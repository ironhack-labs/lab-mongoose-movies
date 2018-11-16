const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const app_name = require("../package.json").name;

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render("celebrities/index", { celebrities });
  })
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});


router.post('/celebrities/new' ,(req,res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchPhrase= req.body.catchPhrase;

  Celebrity.create({name,occupation,catchPhrase}).then(celebrity => {
    console.log(`Se ha creado la celebridad ${celebrity._id} ${celebrity.name}`);
    res.redirect('/celebrities');
  });
})

router.get('/celebrities/:id/edit/', (req,res) => {
  Celebrity.findById(req.params.id).then( celebrity =>{
    res.render('celebrities/edit',{celebrity})
  })
});

router.post('/celebrities/:id/edit/', (req,res) => {
  const {name, occupation, catchPhrase} = req.body;
  const id = req.params.id;
  Celebrity.findByIdAndUpdate(id,{name, occupation, catchPhrase})
     .then(() =>  res.redirect(`/celebrities/${id}`))
})

router.get('/celebrities/:id/delete/', (req,res) => {
  Celebrity.findByIdAndDelete(req.params.id).then(()=> {
    res.redirect('/celebrities');
  })
});



router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrities => {
    console.log(celebrities)
    res.render("celebrities/show", { celebrities });
  })
});






module.exports = router;
