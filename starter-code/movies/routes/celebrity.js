const express = require('express');

// require the Drone model here
const Celebrity = require('../model/celebrity');

const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrityPerson) => {
    if (err) {
      return next(err) //Si hay un error se lo paso al siguiente y mientras me muestra un error que viene definido en app.js y nunca se mostraría el render de index. Es un middleware que ponemos
    }

    res.render('celebrity/index', {
      //foo es el nombre de la colección
      celebrityList: celebrityPerson,
    });
  });
});

// router.get('/', (req, res, next) => {
//   res.render('/celebrity')
// });

// router.get('/bio', (req, res, next) => {
//   res.render('celebrity/bio')
// });

router.get('/new', (req, res, next) => {
  res.render('celebrity/new', {
    celebrity: new Celebrity()
  });
});

router.post('/', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
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
  let id = req.params.id

  Celebrity.findById(id, (err, detail) => {
    res.render('celebrity/bio', {
      Bio: detail
    })
  })
});

// router.get('/:id/edit', (req, res, next) => {
//   let id = req.params.id
//
//   Celebrity.findById(id, (err, celebrity) => {
//     res.render('celebrity/:id/edit', {
//       celebrity: celebrity
//     })
//   })
// });

// router.post('/:id', (req, res, next) => {
//   let id = req.params.id
//
//   const updates = {
//     name: req.body.name,
//     occupation: req.body.occupation,
//     catchPhrase: req.body.catchPhrase,
//   };
//
//   Celebrity.findByIdAndUpdate(id, updates, (err, celebrity) => {
//     if (err){ return next(err); }
//
//     return res.redirect(`/celebrity/${celebrity._id}`);
//   });
// });


router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id

  Celebrity.findByIdAndRemove(id, (err, celebrity) => {
    if (err){ return next(err); }

    return res.redirect('/celebrity');
  });
});


module.exports = router;
