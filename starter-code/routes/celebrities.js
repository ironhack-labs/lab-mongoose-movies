const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.js');

//controlador kiedy w naszej lini adresu local url wywoluje /celebrities (pierwszy parametr to nasze local url) (drugi parametr to paramentry metody render)
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()  
  .then(celebrities => {
    res.render('celebrities/index', {celebrities}) // ten controlador daje nam rezultat w postaci hbs z mojego folderu views/celebrities/index odnosi sie do folderu w naszym projekcie, drugi to colleccion z bazy danych mongo
    //console.log(celebrities)
  })
  .catch(error => {
    console.log(error)
  })
});

// router.get('/celebrities', (req, res, next) => {
//   Celebrity.findById()  
//   .then(celebrities => {
//     res.render('celebrities/index', {celebrities})
//     console.log(celebrities)
//   })
//   .catch(error => {
//     console.log(error)
//   })
// });

router.get('/celebrities/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({'_id': celebrityId})  
  .then(celebrities => { //te celebrities to coleccion z mongodb compass
    res.render('celebrities/show', celebrities)  //te celebrities to coleccion z mongodb compass  
  })
  .catch(e => {
    console.log(e)
  })
})

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
})


router.post('/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase})
  newCelebrity.save( err => {
    if(err) {return next(err)}
    res.redirect('/celebrities');

  })
});

router.post('/celebrities/:id/delete', (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'))
})

router.get('/celebrities/edit/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({'_id': celebrityId})
  .then(celebrities => {
    res.render('celebrities/edit', celebrities) 
  })
  .catch(e => {
    console.log(e)
  })
})

router.post('/celebrities/:id', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
    Celebrity.findOneAndUpdate({'_id': req.params.id}, {$set: {name, occupation, catchPhrase}}) 
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(next)
  })
    


module.exports = router;


