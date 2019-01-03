
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

//Add new celebrity
router.get('/celebrities/new',(req, res, next)=>{
    res.render ('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => { //pour prendre les valeurs du formulaires pour les ajouter à notre bdd mongo
    const { name, occupation, catchPhrase } = req.body; //obligatoire pour passer ensuite les valeurs à Celeb
    const newCeleb = new Celeb ({ name, occupation, catchPhrase})
    newCeleb.save()
    .then((celeb) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    })
  });



//TOUJOURS PLACER LES req.params en fin de code (avant le module.exports)

router.get('/celebrities/:id', (req, res, next) => {  //pour afficher le detail par celebrity dans show.hbs
    let celebId = req.params.id;
    Celeb.findOne({_id: celebId}) //attention syntaxe
      .then(celeb => {
        res.render("celebrities/show", { celeb }) //attention syntaxe , ici jaune = url et celeb = info bdd
      })
      .catch(error => {
        console.log(error)
      })
  });

//Delete celebrity
router.post('/celebrities/:id/delete', (req, res, next) => { 
  let celebId = req.params.id;
  Celeb.findByIdAndRemove({_id: celebId})
  .then(celeb => {
    res.redirect("/celebrities")
  })
  .catch(error => {
    console.log(error)
  })
})

//Edit celebrity
router.get('/celebrities/:id/edit', (req, res, next) => {  
  // let celebId = req.params.id;
  Celeb.findById(req.params.id) 
    .then(celeb => {
      res.render("celebrities/edit", celeb) 
    })
    .catch(error => {
      console.log(error)
    })
});

router.post('/celebrities/:id/edit', (req, res, next) => { 
  const { name, occupation, catchPhrase } = req.body;
  let celebId = req.params.id;
  Celeb.findOneAndUpdate({_id: celebId}, { $set: {name, occupation, catchPhrase}})
  .then((celeb) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});



module.exports = router; //toujours le garder sur chaque fichier .js


/* GET Celebrities list*/

