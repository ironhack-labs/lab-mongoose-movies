const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log(`Estas son las movies ${movies}`);
      res.render("movies/index", { movies });
    })
    .catch(() => {
      console.log(`Error al pasar las movies..... ${movies}`);
      next;
    });
});

router.get("/show/:id", (req, res, next) => {
  let id = req.params.id;
  console.log(`esto es el id....${id}`);
  Movie.findById(id)
    .then(movie => {
      console.log(`Esta es tu movie ${movie}`);
      res.render("movies/show", { movie });
    })
    .catch(() => {
      console.log(`Tu movie no esta :(..... ${movie}`);
      next;
    });
});

router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.get('/edit/:id', (req,res) => {
  Movie.findById(req.params.id).then( movie =>{
    res.render('movies/update',{movie})
  })
});

router.post('/edit/:id', (req,res) => {
  const {title, genre, plot} = req.body;
  const id = req.params.id;
  console.log(`este es el id......... ${id}`);
  Movie.findByIdAndUpdate(id,{title, genre, plot})
     .then(() =>  res.redirect(`/movies/show/${id}`))
})


router.post('/new' ,(req,res) => {
  const title = req.body.title;
  const genre = req.body.genre;
  const plot = req.body.plot;
  console.log(`Se ha creado esto  ${title} ${genre} ${plot}`);

  Movie.create({title,genre,plot}).then(movie => {
    console.log(`Se ha creado una movie  ${movie._id} ${movie.name} ${movie.occupation} ${movie.plot}`);
    res.redirect('/movies');
  }).catch((err) => {
    console.log(`EEEEEEERRORRRRRR...... :(..... ${err}`);
    next;
  });
})


router.get('/delete/:id', (req,res) => {
  Movie.findByIdAndDelete(req.params.id).then(()=> {
    res.redirect('/movies');
  }).catch((err) => {
    console.log(`EEEEEEERRORRRRRR...... :(..... ${err}`);
    next;
  });
});




module.exports = router;
