const Celebrity = require("../models/Celebrity");
const Movie     = require("../models/Movie")

exports.home = (req, res) => {
  res.render("index");
}

exports.celebrities = async (req, res) =>{
  const celebrities = await Celebrity.find();
  res.render("celebrities/index", {celebrities});
}

exports.showCelebrity = async (req, res) => {
  const { id } = req.params;
  const celebrity = await Celebrity.findById(id, err => console.log(err));
  //the view "show" will be set to the route celebrities/:id 
  res.render('celebrities/show', {celebrity})
}
// Use a GET action to render the form to create a celebrity
exports.newCelebrityForm = (req, res) => {
  const config = {
    name: "Create a new celebirty",
    action: "New",
    button: "Create"
  }
  // here we render the new view inside the celebrities folder
  res.render('celebrities/new',{config});
}
//create a POST process to add a new celebrity to the database
exports.newCelebrityPost =  (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase})
  .then(() => res.redirect(`/celebrities`))
  .catch(err => {
    res.render('celebrities/new', { errorMessage: `There was an error ${err}, try again`});
  });
}

//Delete
exports.celebrityDelete = (req, res) => {
  const { id } = req.body;
  Celebrity.findByIdAndDelete(id)
    .then(() => res.redirect("/"))
    .catch(err => console.log(err));
};

//Update

// exports.celebrityEditForm = (res, req) => {
//   const {id} = req.params;
//   Celebrity.findById(id).then(celebrity => {
//     const config = {
//       title: "Edit celebrity",
//       action: `/celebrities/${id}/edit`,
//       button: "Edit"
//     };
//     res.render('celebrities', {config,celebrity})
//   })
// }

// exports.celebrityEditPost = (res, req) => {
//   const { id } = req.params;
//   const {name, occupation, catchPhrase} = req.body;
//   Celebrity.findByIdAndUpdate(id, {$set: { name, occupation, catchPhrase}},
//     { new: true })
//     .then(celebrity => res.redirect(`/celebrities/${celebrity.id}`))
//     .catch(err => console.log(err));
// }


// ------------

exports.movies = async (req, res) =>{
  const movies = await Movie.find();
  res.render("movies/index", {movies});
}

exports.showMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id, err => console.log(err));
  //the view "show" will be set to the route celebrities/:id 
  res.render('movies/show', {movie})
}

// Use a GET action to render the form to create a celebrity
exports.newMovieForm = (req, res) => {
  const config = {
    name: "Create a new movie",
    action: "New",
    button: "Create"
  }
  // here we render the new view inside the celebrities folder
  res.render('movies/new',{config});
}
//create a POST process to add a new celebrity to the database
exports.newMoviePost =  (req, res) => {
  const {title, genre, plot} = req.body;
  Celebrity.create({title, genre, plot})
  .then(() => res.redirect(`/movies`))
  .catch(err => {
    res.render('movies/new', { errorMessage: `There was an error ${err}, try again`});
  });
}

//Delete
exports.movieDelete = (req, res) => {
  const { id } = req.body;
  Movie.findByIdAndDelete(id)
    .then(() => res.redirect("/"))
    .catch(err => console.log(err));
};