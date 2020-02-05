const express = require("express");
const router = new express.Router();
const movieModel = require("./../Models/Movie")

// CREATE
router.get('/new', (req, res) => {
  res.render('movies/new');
})


router.post("/new", (req, res) => {
  const { title, genre, plot } = req.body;
  // if some tests must be performed, do so before database query
  movieModel
    .create({
      title, 
      genre, 
      plot
    })
    .then(dbRes => res.redirect("/movies/all"))
    .catch(dbErr => {
      console.log(dbErr);
      res.send("OH NO, an error occured while creating new movie !");
    });
});



// READ
router.get("/all", (req, res) => {
    movieModel
      .find() // retrieve all the documents in the movies collection
      .then(movies => {
        console.log("coucou nous avons reçu une réponse")
        res.render("movies", 
        {
          movies
        });
      })
      .catch(dbErr => {
        console.log("OH NO ! Database error", dbErr);
      });
  });

router.get("/:id", (req, res) =>
  movieModel
  .findById(req.params.id)
  .then(movie => {
    res.render(`movies/show`, {movie});
  })
  .catch(dbErr => {
    console.error("HOLY SLIP! A DB ERROR HAS OCCURRED", dbErr)
  }))

// UPDATE

// router.post("/movies/update/:id", (req, res) => {
//   // console.log(req.params.id); // access vars declared in the route
//   // console.log(req.body); // access the posted data
//   const { name, occupation, catchPhrase } = req.body;

//   artistModel.findByIdAndUpdate(req.params.id, {
//     name, occupation, catchPhrase
//   })
//   .then(dbRes => {
//     res.redirect("/movies");
//   })
//   .catch(dbErr => {
//     console.error(dbErr)
//   });
// });

// DELETE

router.post("/movies/:id/delete", (req, res) => {
movieModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.redirect("/movies/all");
    })
    .catch(dbErr => {
      console.error("cela n'a pas fonctionné, déso", dbErr);
    });
  });

module.exports = router;