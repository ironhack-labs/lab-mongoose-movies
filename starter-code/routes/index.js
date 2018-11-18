const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then(list => {
      res.render('celebrities', { list });
    })
    .catch(err => {
      res.redirect('/index')
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrity', { celebrity });
    })
    .catch(err => {
      console.log('No encuentra el personaje buscado')
    })
});

router.get('/new', (req, res, next) => {
  res.render('new');
});

router.post('/new', (req, res, next) => {

  let celebrity = new Celebrity();
  celebrity.name = req.body.name;
  celebrity.occupation = req.body.occupation;
  celebrity.catchPhrase = req.body.catchPhrase;


  // //Campos vacios
  // if (bodyName === '' || bodyOccupation === '' || bodyCatchPhrase === '') {
  //   res.render("newError", {
  //     errorMessage: "Ninguno de los campos debe estar empty"
  //   });
  //   return
  // }


  celebrity.save()
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(() => {
      //res.redirect('/new')
    });

});

router.post('/celebrities/:id/delete', (req, res, next) => {


  // //Campos vacios
  // if (bodyName === '' || bodyOccupation === '' || bodyCatchPhrase === '') {
  //   res.render("newError", {
  //     errorMessage: "Ninguno de los campos debe estar empty"
  //   });
  //   return
  // }

  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(() => {
      //res.redirect('/new')
    });

});
router.get('/edit/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity =>{
    res.render('edit',{celebrity});
  });
  
});

// router.post('/celebrities/:id', (req, res, next) => {
//   let modifiedCelebrity = {
//     name: req.body.name,
//     occupation: req.body.occupation,
//     catchPhrase: req.body.catchPhrase
//   }
//   console.log('pasa por el post')
//   Celebrity.update({ _id: req.params.id }, { $set: {modifiedCelebrity} })
//   .then(()=>{
//     console.log('Pasa por update');
//     res.redirect('/celebrities');
//   })
//   .catch(()=>{
//     console.log('No updatea en Mongo');
//   });  
  
  

// });



module.exports = router;
