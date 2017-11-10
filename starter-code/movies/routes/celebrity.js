const express = require('express');
const Celebrity = require('../model/celebrity');
const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (error, celebrityList) =>{
    if(error) return next(error);

    res.render('celebrity/index', {
      celebrityList : celebrityList,
    })
  });
});

// router.get('/celebrity', (req, res, next) => {
//   res.render('/celebrity');
// });
// router.get('/bio', (req, res, next) => {
//   res.render('celebrity/bio');
// });




router.get('/new', (req, res, next) => {
  res.render('celebrity/new');
});

router.post('/', (req, res, next) => {
  const celebrityInfo = {
    celebrityName: req.body.celebrityName,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  // Create a new Product with the params
  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save((err) => {
    if (err) {
      return res.render('celebrity/new', {
        celebrity: newCelebrity
      })
    }

    return res.redirect('/celebrity');
  });
});
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, detail) => {
    res.render('celebrity/bio', {
      detail: detail
    })
  })
});



router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id

  Celebrity.findById(id, (err, celebrity) => {
    res.render('celebrity/edit', {
      celebrity: celebrity
    })
  })
});

router.post('/:id', (req, res, next) => {
  let id = req.params.id

  const updates = {
    name: req.body.name,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    description: req.body.description
  };

  Celebrity.findByIdAndUpdate(id, updates, (err, product) => {
    if (err){ return next(err); }

    return res.redirect(`/celebrity/${celebrity._id}`);
  });
});


router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id

  Celebrity.findByIdAndRemove(id, (err, celebrity) => {
    if (err){ return next(err); }

    return res.redirect('/celebrity');
  });
});


  module.exports = router;
