
const movieModel = require("./../models/Movie");

module.exports = function(router) {

  // GET all movies route page
  router.get("/movies", (req, res) => {
    movieModel
      .find() //
      .then(dbResults => {
        res.render("movies/index", {
          movies: dbResults
        });
      })
      .catch(dbErr => {
        console.log("OH NO ! Database error", dbErr);
      });
  });

  router.post("/movies", (req, res) => {
    const { title, genre, plot } = req.body;
 
    movieModel
      .create({ title, genre, plot })
      .then(dbRes => res.redirect("/movies"))
      .catch(dbErr => {
        console.log(dbErr);
        res.render("movies/new") 
      });
    // res.render("movies/new") 
  })

  router.get("/movies/new", (req, res) => {
    res.render("movies/new") 
  })

  router.get("/movies/:id", (req, res) => {
    movieModel
      .findById(req.params.id)
      .then(dbRes => {
        res.render("movies/show", { movieDetails: dbRes });
      })
      .catch(dbErr => console.error(dbErr));
  });

  
  router.post("/movies/:id/delete", (req, res) => {
 
    movieModel
      .findByIdAndDelete(req.params.id)
      .then(dbRes => {
        res.redirect("/movies");
      })
      .catch(dbErr => console.error(dbErr));
  })

};
