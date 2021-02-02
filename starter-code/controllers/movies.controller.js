const Movie = require("../models/movie.model");
const Celebrity = require("../models/celebrity.model")


// Iteration 8
module.exports.list = (req, res, next) => {
    Movie.find()
        .then((movies) => res.render('movies/index', { movies }))
        .catch((e) => next(e))


};

//Iteration 9

module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.id)
        .populate('cast')
        .then((movie) => {

             
            res.render('movies/show',  movie )
        })
        .catch((e) => next(e))

}

//Iteration 10

module.exports.create = (req, res, next) => {
     Celebrity.find()
     .then((celebrities) => res.render('movies/new',{celebrities}))
     .catch((e) => next(e))

   
};

module.exports.doCreate = (req, res, next) => {
    const newMovie = new Movie(req.body);

    newMovie.save()
        .then(() => res.redirect('/movies'))
        .catch((e) => {
            console.log(e);
            res.render('movies/new')
        });
};

// Iteration 11     

module.exports.delete = (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
        .then((Movie) => {
            console.log(`Borrado ${Movie}`);
            res.redirect('/movies');
        })

        .catch((e) => next(e))
};

// Iteration 12

module.exports.edit = (req,res,next) => {
    Movie.findById(req.params.id)
    .then ((movie) => res.render('movies/edit',movie))
    .catch((e) => next(e))
};

module.exports.doEdit = (req,res,next) => {
   // const Movie = new Movie(req.body);
    Movie.findByIdAndUpdate(req.params.id,req.body)
    .then (() => res.redirect('/movies'))
    .catch((e) => next(e))
    
}


