const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.js')

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(celebrities =>{
        console.log(celebrities)
      res.render('./celebrities/index', {celebrities})
    })
    .catch(err =>{
        console.log(err)
    })
  } )

  router.get('/celebrities/:id',(req, res, next) => {
      let celebrityId = req.params.id;
      Celebrity.findOne({"_id": celebrityId})
      .then(celebrity => {
          //console.log('celebrity')
          res.render('celebrities/show', celebrity)
      })
      .catch(err => {
          console.log(err)
      })
  })

  router.get('/new', (req, res, next) => {
    res.render("celebrities/new")
  });

  router.post('/new', (req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    const celebrity = new Celebrity ({name, occupation, catchPhrase});
    celebrity.save( err => {
      if (err) { return next(err) }
      res.redirect('/');
    })
  });


router.post("/celebrities/:id/delete", (req, res, next) => {
    let celebrityId = req.params.id;
     Celebrity.findOneAndRemove({"_id": celebrityId})
     //console.log('paco')
      .then(() => {
          //console.log('paco')
        res.redirect("/celebrities");
      })
      .catch(next);
  });

//   router.get('/celebrities/edit/:id', (req, res, next) => {
//     //     let celebrityId = req.params.id;
//     //     Celebrity.findOneAndUpdate({'_id': celebrityId})
//     //     //res.render('celebrities/edit')
//     //     .then(() => {
//     //         res.render('celebrities/edit');
//     //     })
//     //     .catch(next);
//     // })

// router.post('/celebrities/edit/:id', (req, res, next) => {
    
// })
router.get('/celebrities/edit/:id', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => {
        res.render("celebrities/edit", celebrity)
    })
    .catch((error) => {
        console.log(error)
      })
  });


  router.post('/celebrities/:id', (req, res, next) => {
    const { name, occupation, catchPhrase} = req.body;
    Celebrity.findOneAndUpdate ({'_id': req.params.id}, { $set: { name, occupation,catchPhrase }})
    .then(() => {
      res.redirect("/celebrities")
    })
   
    .catch(next)
  });






//   router.post('/books/edit', (req, res, next) => {
//     const { title, author, description, rating } = req.body;
//     Book.update({_id: req.query.book_id}, { $set: {title, author, description, rating }})
//     .then((book) => {
//       res.redirect('/books')
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//   });

  




module.exports = router;