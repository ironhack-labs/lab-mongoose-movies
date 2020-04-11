const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
          // -> allTheBooksFromDB is a placeholder, it can be any word
         // |
    .then(data => {
      //console.log('Retrieved celebrities from DB:', data);
      res.render('celebrities/index', { celebrities: data });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    })
  //res.render('index');
});

router.get('/new', (req, res, next) => {
  res.render("celebrities/new");
});


router.post('/', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity ({ name, occupation, catchPhrase})
  newCelebrity.save()
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })

});


router.get('/:id', (req, res, next) => {

  Celebrity.findOne({'_id': req.params.id})
  .then(oneCelebrity => {
    res.render('celebrities/show', oneCelebrity);
  })
  .catch(error =>{
    console.log('Error while getting the celebrity from the DB: ', error);
  })
});


router.post('/:id/delete', (req, res, next) => {

  Celebrity.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch(error =>{
    console.log('Error while deleting the celebrity from the DB: ', error);
  })
});


// router.get('/:id/delete', (req, res, next) => {

//   Celebrity.deleteOne({'_id':req.params.id})
//   .then(() => {
//     res.redirect('/celebrities');
//   })
//   .catch(error =>{
//     console.log('Error while deleting the celebrity from the DB: ', error);
//   })
// });

router.get('/:id/edit', (req, res, next) => {

  Celebrity.findOne({'_id':req.params.id})
  .then((celebrity) => {
    res.render('celebrities/edit', {celebrity});
  })
  .catch(error =>{
    console.log('Error while deleting the celebrity from the DB: ', error);
  })
});

// router.post('/:id', (req, res, next) => {

//   Celebrity.findById({'_id': req.params.id}, {$set: { name, occupation, catchPhrase}})
//   .then(oneCelebrity => {
//     res.render('celebrities/show', oneCelebrity);
//   })
//   .catch(error =>{
//     console.log('Error while getting the celebrity from the DB: ', error);
//   })
// });

router.post('/:id/edit', (req,res,next) => {
  console.log("req.body", req.body)
  Celebrity.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase,
    }).then(() => {
      res.redirect('/celebrities')
    }) 
    .catch(error =>{
        console.log('Error while getting the celebrity from the DB: ', error);
      })
  })


module.exports = router;