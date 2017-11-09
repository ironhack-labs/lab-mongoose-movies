const express = require('express');
const Celebrities = require('../models/celebrities');
const router = express.Router();



router.get('/', (req, res, next) => {
  Celebrities.find({}, (err, celebrities) => {
    if (err) {
      return next(err)
    }
    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id
console.log("entro por get id")
  Celebrities.findById(id, (err, result) => {
    res.render('celebrities/show', {
      celebrity: result
    })
  })
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new', {
    celebrity: new Celebrity()
  });
});

router.post('/', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
});


// Create a new Product with the params
  const newCeleb = new Celebrity(celebrityInfo);

  newCeleb.save((err) => {
    if (err) {
      return res.render('celebrities/new', {
        celebrity: newCeleb
      })
    }

    return res.redirect('/celebrities');
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id

//   Celebrity.findById(id, (err, product) => {
//     res.render('products/show', {
//       product: product
//     })
//   })
// });


module.exports = router;
