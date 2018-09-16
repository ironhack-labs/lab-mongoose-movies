const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js')

//mostrar celebridades
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities", {celebrities});
    })
    .catch(error => {
      console.log(error)
    })
});

//mostrar detalles de una celebridad
router.get('/celebrities/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => {
      res.render("celebrities/show", celebrity)
    })
    .catch(error => {
      console.log(error)
    })
});

//Crear celebridad
router.get('/new', (req, res, next) => {
  res.render("celebrities/new")
});


router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase} = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase})
  newCelebrity.save()
  .then( () => {
    console.log("Celebrity sucessfully created!");
    res.redirect('/celebrities'); 
   })
  .catch(next)
});


//Borrar
router.get('/celebrities/delete/:id',(req,res) => {
    Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));
  })


//Editar celebridad
router.get('/celebrities/edit/:id', (req,res) => {
    Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/edit', celebrity);
    })
  })
  
  
  router.post('/celebrities/:id', (req, res, next) => {
    const { name, occupation, catchPhrase} = req.body;
    Celebrity.findOneAndUpdate ({'_id': req.params.id}, { $set: { name, occupation,catchPhrase }})
    .then(() => {
      res.redirect("/celebrities")
    })
   
    .catch(next)
  });


/* router.get('/celebrities/edit/:id', (req,res) => {
    Celebrity.findById(req.params.id).then(celebrity => {
      res.render('celebrity/edit',{celebrity});;
    })
  })
  
  /* CR(U)D: Update the book in DB */
  /* router.post('/celebrities/edit/:id', (req,res) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.findByIdAndUpdate(req.params.id,{ name, occupation, catchPhrase })
        .then( celebrity => {
          res.redirect('/celebrities')
        })
  }) */


module.exports = router;

