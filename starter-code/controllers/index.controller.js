const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

exports.celebrityList = (req, res) => {
    Celebrity.find()
        .then(celebrities => res.render("celebrities", { celebrities }))
        .catch(err => console.log(err));
};

exports.celebrityDetail = (req, res) => {
    const { id } = req.params;
    Celebrity.findById(id)
        .then(celebrity => res.render("celebrities/show", celebrity))
        .catch(err => res.render ("celebrities/show", { err: "Doesn't exist" }));
};

exports.newCelebrityForm = (req, res) => {
    const config = {
        title: "Add new celebrity",
        action: "/new",
        button: "Add"
    };
    res.render("celebrities/new", { config });
};

exports.newCelebrityPost = (req, res) => {
    const { name, occupation ,catchPhrase } = req.body;
    Celebrity.create({ name, occupation, catchPhrase })
        .then(celebrity => res.redirect(`/celebrities/${celebrity._id}`))
        .catch(err => console.log(err))
};

exports.celebrityDelete = (req, res) => {
    const { id } = req.params;
    Celebrity.findByIdAndDelete(id)
    .then(() => res.redirect ("/celebrities"))
    .catch(err => console.log(err));
}


/* MOVIES */

exports.moviesList = (req, res) => {
    Movie.find()
    .then(movies => res.render("movies", { movies }))
    .catch(err => console.log(err));
}

exports.movieDetail = (req, res) => {
    const { id } = req.params;
    Movie.findById(id)
        .then(movie => res.render("movies/show", movie))
        .catch(err => res.render ("movies/show", { err: "Doesn't exist" }));
};

exports.newMovieForm = (req, res) => {
    const config = {
        title: "Add new movie",
        action: "/new-movie",
        button: "Add"
    };
    res.render("movies/new", { config });
};

exports.newMoviePost = (req, res) => {
    const { title, genre, plot } = req.body;
    Movie.create({ title, genre, plot })
        .then(movie => res.redirect(`/movies/${movie._id}`))
        .catch(err => console.log(err))
};

exports.movieDelete = (req, res) => {
    const { id } = req.params;
    Movie.findByIdAndDelete(id)
    .then(() => res.redirect ("/movies"))
    .catch(err => console.log(err));
}