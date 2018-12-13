
const express = require('express'); //remettre sur chaque fichier .js
const router  = express.Router(); //remettre sur chaque fichier .js
const Celeb = require("../models/celebrity")

router.get('/celebrities', (req, res, next) => {
    Celeb.find()
      .then(celebrities => {
        res.render("celebrities", { celebrities });
        // console.log(celebrities);
      })
      .catch(error => {
        console.log(error)
      })
  });

router.get('/celebrities/:id', (req, res, next) => {  //pour afficher le detail par livre dans book-detail
    let celebId = req.params.id;
    Celeb.findOne({_id: celebId}) //attention syntaxe
      .then(celeb => {
        res.render("celebrities/show", { celeb }) //attention syntaxe , ici jaune = url et celeb = info bdd
      })
      .catch(error => {
        console.log(error)
      })
  });

router.get('/celebrities/new',(req, res, next)=>{
    res.render ('celeb-new');
});

router.post('/celebrities/new', (req, res, next) => { //pour prendre les valeurs du formulaires pour les ajouter à notre bdd mongo
    const { name, occupation, catchPhrase } = req.body; //obligatoire pour passer ensuite les valeurs à Book
    const newCeleb = new Celeb ({ name, occupation, catchPhrase})
    newCeleb.save()
    .then((celeb) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    })
  });

module.exports = router; //toujours le garder sur chaque fichier .js


/* GET Celebrities list*/

