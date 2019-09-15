const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celeb => res.render('celebrities/index', {celeb}))
    .catch(err => console.log('Celeb can not be found', err))
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

// router.get('/:id/edit', (req, res, next) => {
//   res.render('celebrities/edit');
// });

router.get('/:id', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(celeb => res.render('celebrities/show', {celeb}))
    .catch(err => console.log('Invalid ID', err))
});

// router.get('/:id/edit', (req, res, next) => {
//   const celebId = req.params.id;
//   Celebrity.findById(celebId)
//     .then(celeb => {
//       console.log('Edit celeb', celeb);
//       res.render("celebrities/edit", { celeb })
//     })
//     .catch(err => {
//       console.log("Couldn't go to edit place", err);
//       next();
//     });
// });

router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
    .then(() => {
      console.log(`Success! ${name} was created in the database!`);
      res.redirect(`/celebrities`);
    })
    .catch(err => {
      console.log('Invalid celebrity', err);
      res.redirect("/new");
    });
});

router.post("/:id/delete", (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findByIdAndRemove(celebId)
    .then(() => {
      console.log('Removed celeb');
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log("Couldn't delete this celeb, sorry" ,err);
      next();
    });
});

// router.post('/edit', (req, res, next) => {
//   const {name, occupation, catchPhrase} = req.body;
//   Celebrity.findByIdAndUpdate(req.query.celebId, {$set: {name, occupation, catchPhrase}}, {new: true})
//     .then(() => {
//       console.log('Updated celeb', celeb);
//       res.redirect('/celebs/list');
//     })
//     .catch(err => {
//       console.log("Couldn't upadate celeb", err);
//       next();
//     });
// });





module.exports = router;