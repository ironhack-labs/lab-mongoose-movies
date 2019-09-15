const moviesRouter = require("express").Router();
const Movies = require("./../models/Movies");

moviesRouter.get("/", (req, res) => {
  Movies.find().then(allMovies => {
    res.render("movies/index", { allMovies: allMovies });
  });
});

// View to create a new movie
moviesRouter.get("/new", (req, res) => {
  res.render("movies/new");
});

// Add a new movie
moviesRouter.post("/new", (req, res) => {
  let title = req.body.title;
  let genre = req.body.genre ? req.body.genre.split(",") : undefined;
  let plot = req.body.plot;

  // Clean the genres
  genre = genre.map(singleGenre => singleGenre.toLowerCase().trim())

  if (!title || !genre || !plot) {
    res.redirect("/movies/new");
    return;
  }

  Movies.create({
    title: title,
    genre: genre,
    plot: plot
  }).then(movieCreated => {
    res.redirect("/movies");
  });
});

// View to see a movie
moviesRouter.get("/detail/:id", (req, res) => {
  Movies.findById(req.params.id).then(movie => {
    res.render('movies/detail', {movie: movie})
  })
})

// View to edit a movie
moviesRouter.get("/edit/:id", (req, res) => {
  Movies.findById(req.params.id).then(movie => {
    let movieFormatted = JSON.parse(JSON.stringify(movie))
    movieFormatted.genre = movieFormatted.genre.join(",")
    
    res.render("movies/edit", {
      movie: movieFormatted
    })
  })
})

// Edit a movie
moviesRouter.post("/edit", (req, res) => {
  let _id = req.body._id
  let title = req.body.title
  let genre = req.body.genre ? req.body.genre.split(",") : undefined
  let plot = req.body.plot

  if (!title || !genre || !plot) {
    res.redirect(`/movies/edit/${_id}`)
    return
  }

  Movies.findByIdAndUpdate(_id, {
    title: title,
    genre: genre,
    plot: plot
  }).then(movieUpdated => {
    res.redirect(`/movies/detail/${_id}`)
  })
})

// View to delete a movie
moviesRouter.get("/delete/:id", (req, res) => {
  Movies.findById(req.params.id).then(movie => {
    res.render("movies/delete", {movie: movie})
  })
})

// Delete a movie
moviesRouter.post("/delete", (req, res) => {
  Movies.findByIdAndDelete(req.body._id).then(movieDeleted => {
    res.redirect("/movies")
    return
  })
})

module.exports = moviesRouter;
