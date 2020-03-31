const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity
      .find()
      .then(celebrities => {
        console.log(celebrities);
          res.render('celebrities/index', {
              celebrities
          });
      })
      .catch(error => console.log(error));
});

//  router add new celebrities

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
})


// router for celebrities information

router.get('/celebrities/:id', (req, res, next) => {
  const {
    id
  } = req.params
  console.log(id);
  Celebrity
    .findById(id)
    .then(celebrities => {
      console.log(celebrities);
      res.render('celebrities/show', {
        celebrities
      });
    })
    .catch(error => console.log(error));
})


// route edit

// router.get('/celebrities/edit/:id', (req, res, next) => {
//   const {
//     id
//   } = req.params
//   console.log(id);
//   Celebrity
//     .findById(id)
//     .then(celebrities => {
//       console.log(celebrities);
//       res.render('celebrities/edit', {
//         celebrities
//       });
//     })
//     .catch(error => console.log(error));
// })


//router delete

router.get('/delete-celebrities/:id', (req, res, next) => {
  const {
    id
  } = req.params
  console.log(id);
  Celebrity
  .findByIdAndRemove(id)
  .then(celebrities => {
    console.log(celebrities);
    res.redirect('/celebrities');
  })
  .catch(error => console.log(error));
})





router.post('/celebrities/new', (req, res) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body;
  
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
  .then(response => {
    console.log(response);
    res.redirect('/celebrities');
  })
  .catch(error => console.log(error));
});


router.get('/celebrities/edit/:id', (req, res, next) => {
  const {
    id
  } = req.params
  console.log(id);
  Celebrity
    .findById(id)
    .then(celebrities => {
      console.log(celebrities);
      res.render('celebrities/edit', celebrities);
    })
    .catch(error => console.log(error));
})

router.post('/celebrities/edit', (req, res, next) => {
  const {
    id,
    name,
    occupation,
    catchPhrase
  } = req.body
  console.log(id);
  Celebrity
    .findByIdAndUpdate(id, {$set: {name, occupation, catchPhrase}}, {new: true})
    .then(celebrities => {
      console.log(id);
      res.redirect(`/celebrities/${id}`);
    })
    .catch(error => console.log(error));
})


module.exports = router;
