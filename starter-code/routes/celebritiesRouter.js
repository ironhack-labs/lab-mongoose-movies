const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log(`Estas son las celebrities ${celebrities}`);
      res.render("celebrities/index", { celebrities });
    })
    .catch(() => {
      console.log(`Error al pasar las celebrities..... ${celebrities}`);
      next;
    });
});

router.get("/show/:id", (req, res, next) => {
  let id = req.params.id;
  console.log(`esto es el id....${id}`);
  Celebrity.findById(id)
    .then(celebrity => {
      console.log(`Esta es tu celebrity ${celebrity}`);
      res.render("celebrities/show", { celebrity });
    })
    .catch(() => {
      console.log(`Tu celebrity no esta :(..... ${celebrity}`);
      next;
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get('/edit/:id', (req,res) => {
  Celebrity.findById(req.params.id).then( celebrity =>{
    res.render('celebrities/update',{celebrity})
  })
});

router.post('/edit/:id', (req,res) => {
  const {name, occupation, catchPhrase} = req.body;
  const id = req.params.id;
  console.log(`este es el id......... ${id}`);
  Celebrity.findByIdAndUpdate(id,{name, occupation, catchPhrase})
     .then(() =>  res.redirect(`/celebrities/show/${id}`))
})


router.post('/new' ,(req,res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchPhrase = req.body.catchPhrase;
  console.log(`Se ha creado esto  ${name} ${occupation} ${catchPhrase}`);

  Celebrity.create({name,occupation,catchPhrase}).then(celebrity => {
    console.log(`Se ha creado una celebrity  ${celebrity._id} ${celebrity.name} ${celebrity.occupation} ${celebrity.catchPhrase}`);
    res.redirect('/celebrities');
  }).catch((err) => {
    console.log(`EEEEEEERRORRRRRR...... :(..... ${err}`);
    next;
  });
})


router.get('/delete/:id', (req,res) => {
  Celebrity.findByIdAndDelete(req.params.id).then(()=> {
    res.redirect('/celebrities');
  }).catch((err) => {
    console.log(`EEEEEEERRORRRRRR...... :(..... ${err}`);
    next;
  });
});







module.exports = router;
