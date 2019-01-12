const express = require('express');
const router  = express.Router();
//const Empresa = require('../models/empresas')}
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res)=>{
  res.render('index')
})

router.get('/celebrities', (req, res)=>{
  Celebrity.find()
    .then(celebridad =>{
      res.render('./celebrities/index', {celebridad})
    })
    .catch(err =>{
      console.log(err)
    })
})

router.get("/celebrities/new",(req,res)=>{
  res.render("./celebrities/new")
})

router.post("/celebrities/new",(req,res)=>{
  const {name,ocupation,catchPhrase} = req.body;
  const newCeleb = new Celebrity({name,ocupation,catchPhrase});
  newCeleb.save()
  .then((celebridad)=>{
    res.render('index')
  })
  .catch(err=>console.log(err));
})

router.post('/celebrities/:id/delete', (req, res)=>{
  let celebId = req.params.id
  console.log(celebId);
  Celebrity.findByIdAndRemove({'_id': celebId})
  .then((celebridad)=>{
    res.render('index')
  })
  .catch((err)=>{
    console.log(err);
  })
})

router.get("/celebrities/edit/:id",(req,res)=>{
  Celebrity.findOne({'_id': req.params.id})
  .then((celebridad)=>{
    console.log(celebridad);
    res.render('./celebrities/edit', {celebridad})
  })
  .catch((err)=>{
    console.log(err);
  })
})

router.post("/celebrities/edit",(req,res)=>{
  const {name,ocupation,catchPhrase} = req.body;
  Celebrity.updateOne({_id:req.query.celeb_id},{$set:{name,ocupation,catchPhrase}})
  .then((celebridad)=>{
    res.render('index')
  })
  .catch(err=>console.log(err));
})

router.get('/celebrities/show/:id', (req, res)=>{
  let celebId = req.params.id
  console.log(celebId);
  Celebrity.findOne({'_id': celebId})
  .then((celebridad)=>{
    res.render('./celebrities/show', {celebridad})
  })
  .catch((err)=>{
    console.log(err);
  })
})

//////////////////////////////////////////////////////////

/* GET movies home page */
router.get('/', (req, res)=>{
  res.render('index')
})

router.get('/movies', (req, res)=>{
  Movie.find()
    .then(pelicula =>{
      res.render('./movies/index', {pelicula})
    })
    .catch(err =>{
      console.log(err)
    })
})

router.get("/movies/new",(req,res)=>{
  res.render("./movies/new")
})

router.post("/movies/new",(req,res)=>{
  const {title,genre,plot} = req.body;
  const newMovie = new Movie({title,genre,plot});
  newMovie.save()
  .then((pelicula)=>{
    res.render('index')
  })
  .catch(err=>console.log(err));
})

router.post('/movies/:id/delete', (req, res)=>{
  let movieId = req.params.id
  console.log(movieId);
  Movie.findByIdAndRemove({'_id': movieId})
  .then((pelicula)=>{
    res.render('index')
  })
  .catch((err)=>{
    console.log(err);
  })
})

router.get("/movies/edit/:id",(req,res)=>{
  Movie.findOne({'_id': req.params.id})
  .then((pelicula)=>{
    console.log(pelicula);
    res.render('./movies/edit', {pelicula})
  })
  .catch((err)=>{
    console.log(err);
  })
})

router.post("/movies/edit",(req,res)=>{
  const {title,genre,plot} = req.body;
  Movie.updateOne({_id:req.query.movie_id},{$set:{title,genre,plot}})
  .then((pelicula)=>{
    res.render('index')
  })
  .catch(err=>console.log(err));
})

router.get('/movies/show/:id', (req, res)=>{
  let movieId = req.params.id
  console.log(movieId);
  Movie.findOne({'_id': movieId})
  .then((pelicula)=>{
    res.render('./movies/show', {pelicula})
  })
  .catch((err)=>{
    console.log(err);
  })
})

module.exports = router;
