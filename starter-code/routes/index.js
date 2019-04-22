const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
   .then((results) => {
     console.log(results)
     res.render('celebrities', { celebrities: results })
   .catch((err) => {
     throw Error(err);
   });
});
});

router.get('/celebrities/add', (req, res, next) => {
  res.render('celebrities-new');
});

router.post('/celebrities/add', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const addCelebrity = new Celebrity({name, occupation, catchPhrase});
  addCelebrity.save()
  .then(() => {
      res.redirect('/celebrities');
    })
  .catch((error) => {
      res.redirect('/celebrities/new');
    });
});

router.get('/celebrities/edit', (req, res, next) => {
  const celebrityId = req.query.celebrityId;
  console.log( "TEST", celebrityId)
  Celebrity.findOne({_id: celebrityId })
    .then((result) => {      
      res.render('celebrity-edit', { celebrity : result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.post('/celebrities/edit', (req, res, next) => {
  const celebrityId = req.query.celebrityId;
  Celebrity.findByIdAndUpdate(celebrityId, { $set: req.body })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.get('/celebrities/del/:celebrityId', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.celebrityId)  
    .then(() => {                  
      res.redirect('/celebrities');
    })
    .catch((err) => {
      throw new Error(err);
    });
});


router.get('/celebrities/:celebrityId', (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then((results) => {     
      res.render('show', { celebrity: results })
        .catch((err) => {
          throw Error(err);
        });
    });
});





// router.post('/books/add', (req, res, next) => {
//   const { title, author, description, rating } = req.body;// middleware  
//   const newBook = new Book({title, author, description, rating});// crea uma instancai de model
//   newBook.save()
//     .then((book) => {
//       res.redirect('/books');
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });


module.exports = router;
