const express = require("express");

const Celebrity = require("../models/Celebrity.model");

const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((allTheCelebritiesFromDB) => {
      console.log(allTheCelebritiesFromDB);
      res.render("celebrities/index.hbs", {
        celebrities: allTheCelebritiesFromDB,
      });
    })
    .catch((err) =>
      console.log(`Err while getting the books from the  DB: ${err}`)
    );
});

// Iteration #4: Adding New Celebrities

router.get("/celebrities/new", (req, res) => res.render("celebrities/new"));

// POST route to submit the form to create a post

router.post("/celebrities/new", (req, res) => {
  // console.log(req.body);
  const { name, occupation, catchphrase } = req.body;
  const celeb = {
    name: name,
    occupation: occupation,
    catchPhrase: catchphrase,
  };
  const newCeleb = new Celebrity(celeb);

  newCeleb
    .save()
    .then(() => res.redirect("/celebrities"))
    .catch((error) => `Error while creating a new book: ${error}`);
});

// Iteration #5: Deleting Celebrities

router.post("/celebrities/:id/delete", (req, res, next) => {
  const { id } = req.params;

  Celebrity.findByIdAndRemove(id)
    .then(res.redirect("/celebrities"))
    .catch((err) => {
      next;
      console.log("Error deleting celebrity from DB: ", err);
    });
});

// Iteration #6 (Bonus): Editing Celebrities

router.post('/celebrities/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.findByIdAndUpdate(id, {name, occupation, catchPhrase}, {new: true})
    .then(res.redirect('/celebrities'))
    .catch(err => {
      next;
      console.log('Error updating celeb: ', err)
    })
})

router.get('/celebrities/:id/edit', (req, res, next) => {
  const { id } = req.params;

  Celebrity.findById(id)
    .then(celebToEdit  => {
      res.render('celebrities/edit', celebToEdit);
    })
    .catch(err => {
      next;
      console.log('Error retrieving celeb: ', err)
    })
})


router.get("/celebrities/:id", (req, res, next) => {
  const { id } = req.params;

  Celebrity.findById(id)
    .then((celebrityToShow) => {
      res.render("celebrities/show.hbs", { singleceb: celebrityToShow });
    })
    .catch((error) =>
      console.log(`Error while getting a single celebrity for edit: ${error}`)
    );
});

module.exports = router;
