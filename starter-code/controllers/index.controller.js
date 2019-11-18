const Celebrity = require ("../models/Celebrity");
const Movie  = require ("../models/Movie");
// lista
exports.celebritiesList = (req, res) => {
  Celebrity.find()
  .then(celebrities => res.render("celebrities", {celebrities}))
  .catch(err => console.log(err));
};

//detalle
exports.celebritiesDetail = (req, res) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then(celebridad => res.render("show", celebridad))
    .catch(err => res.render("show", { err: "No existe" }));
};
//add
exports.newCelebrityForm = (req, res) => {
  const config = {
    title: "Add new celebrity",
    action: "/newcelebrity",
    button: "Add"
  }
  res.render("newcelebrity", {config})
}

exports.newCelebrityPost = (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(product => res.redirect(`/celebrities`))
    .catch(err => console.log(err));
};
//delete
exports.celebrityDelete = (req, res) => {
  const { id } = req.params;
  Celebrity.findByIdAndDelete(id)
  .then(() => res.redirect("/celebrities"))
  .catch(err =>  console.log(err));
}
//update
exports.celebrityEdit = (req, res) => {
  const { id } = req.params;
  Celebrity.findById(id).then(celebrity => {
    const config = {
      title: "Update product",
    action: `/celebrities/${id}/edit`,
    button: "Update"
    };
    res.render("newcelebrity", {config, celebrity} );
  });
};
exports.celebrityEditPost = (req, res) => {
  const {id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(
    id,
    {
      $set:  {name, occupation, catchPhrase }
    },
    {
      new: true
    }
  )
  .then(()=> res.redirect(`/celebrities/${celebrities._id}`))
  .catch(err => console.log(err));
}

/*Movies*/
exports.moviesList = (req, res) => {
  Movie.find()
  .then(movies => res.render("moviesList", {movies}))
  .catch(err => console.log(err));
};

//detalle
exports.moviesDetail = (req, res) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(pelicula => res.render("showMovie", pelicula))
    .catch(err => res.render("showMovie", { err: "No existe" }));
};
//add
exports.newMovieForm = (req, res) => {
  const config = {
    title: "Add new movie",
    action: "/newmovie",
    button: "Add"
  }
  res.render("newmovie", {config})
}

exports.newMoviePost = (req, res) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
    .then(product => res.redirect(`/movies`))
    .catch(err => console.log(err));
};
//delete
exports.movieDelete = (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndDelete(id)
  .then(() => res.redirect("/movies"))
  .catch(err =>  console.log(err));
}

//update
exports.movieEdit = (req, res) => {
  const { id } = req.params;
  Movie.findById(id).then(movie => {
    const config = {
      title: "Update movie",
    action: `/movies/${id}/edit`,
    button: "Update"
    };
    res.render("newmovie", {config, movie} );
  });
};
exports.movieEditPost = (req, res) => {
  const {id } = req.params;
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(
    id,
    {
      $set:  {title, genre, plot }
    },
    {
      new: true
    }
  )
  .then(()=> res.redirect(`/movies/${movies._id}`))
  .catch(err => console.log(err));
}
