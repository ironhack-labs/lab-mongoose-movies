const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');


// Iteration 2
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebsFromDB => {
      console.log(`List of celebrities: ${celebsFromDB}`)
      res.render('./celebrities/index', { celebs : celebsFromDB })
    })
    .catch((err) => {
      console.log(`Error while getting celebrities from the DB: ${err}`);
      next();
    });
});

// Iteration 3
router.get('/celebrities/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then(celeb => {
      console.log(`Details of football celeb: ${celeb}`)
      res.render('./celebrities/show', celeb)
    })
    .catch((err) => {
      console.log(`Error while getting celebrities from the DB: ${err}`);
      next();
    });
});


// Iteration 4
router.get('/celebrities/new', (req, res) => res.render('./celebrities/new'));

router.post('/celebrities/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findOne({ name })
    .then(celebDocFromDB => {
      if (!celebDocFromDB) {
        Celebrity.create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'));
      } else {
        res.render('./celebrities/new', { message: 'Celebrity already exist.' });
        return;
      }
    })
    .catch(err => console.log(`Error while creating a new celebrity: ${err}`));
});


// router.get("/new", (req, res, next) => res.render("celebrities/new"));

// router.post("/new", (req, res, next) => {
//   const { name, occupation, catchPhrase } = req.body;
//   Celebrity.findOne({ name }) //do not create one if already exist
//     .then((celebDocFromDB) => {
//       if (!celebDocFromDB) {
//         Celebrity.create({ name, occupation, catchPhrase }).then(() =>
//           res.redirect("/celebrities")
//         );
//       } else {
//         res.render("celebrities/new", {
//           message:
//             "It seems you are already have a celebrity with the same name",
//         });
//         return;
//       }
//     })
//     .catch((err) =>
//       console.log(`Error while creating a new celebrity: ${err}`)
//     );
// });





module.exports = router;