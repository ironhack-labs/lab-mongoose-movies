const express = require('express');
const router  = express.Router();
const celebs = require('../model/Celebrity');
const movies = require('../model/Movies')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//All Celebs
router.get('/celebrities/index', (req, res, next)=>{
  celebs.find()
  .then((data)=>{
    res.render('celebrities/index',{data})
  })
  .catch((err)=>{
    next(err);
  })
})

//Single Celebs
router.get('/celebrities/show/:id', (req, res, next)=>{

  let celebid = req.params.id;
  celebs.findById(celebid)
  .then((singleCeleb)=>{

    res.render('celebrities/show', {singleCeleb})

  })
  .catch((err)=>{
    next(err);
  })

})

//Celeb New Form
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});



//Inserts New Celeb Item
router.post('/celebrities', (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  const CelebMod = new celebs ({name, occupation,catchPhrase});
 CelebMod.save()
 .then((newceleb)=>{

   res.redirect('/');
 })

  if (!newCeleb.name || !newCeleb.email || !newCeleb.catchPhrase) {

    return res.status(400).json({ msg: 'Please include a name, email and catchPhrase' });
  }

});

//Deletes Celeb Entry
router.post('/celebrities/delete/:id', (req, res, next)=>{

  let celebid = req.params.id;
  celebs.findByIdAndRemove(celebid)
  .then(()=>{

   res.redirect('/');

  })
  .catch((err)=>{

    next(err);
   
  })

})

//Update Celebs Form
router.get('/celebrities/edit/:id', (req, res, next)=>{
  celebs.findById(req.params.id)
  .then((celebEdit)=>{
          res.render('celebrities/edit', {celeb: celebEdit})
  })
  .catch((err)=>{
      next(err);
  })
})

//Update Celeb Entry
router.post('/celebrities/update/:id', (req, res, next)=>{
  let celebid = req.params.id;
  celebs.findByIdAndUpdate(celebid, req.body)
  .then((CelebrityUpdate)=>{
      res.redirect('/')
  })
  .catch((err)=>{
      next(err);
  })
})



//Get All Movies
router.get('/movies/index', (req, res, next)=>{
  movies.find()
  .then((data)=>{
    res.render('movies/index',{data})
  })
  .catch((err)=>{
    next(err);
  })
})

//Get Single Movie
router.get('/movies/movieInfo/:id', (req, res, next)=>{

  let movieid = req.params.id;
  movies.findById(movieid)
  .then((singleMovie)=>{

    res.render('movies/movieinfo', {singleMovie})

  })
  .catch((err)=>{
    next(err);
  })

})

//Add New Movie Form
router.get('/movies/addnew', (req, res, next) => {
  res.render('movies/addnew');
});


//Inserts New Movie Item 
router.post('/movies', (req, res) => {
  const {title, genre, plot} = req.body;
  const movieModel = new movies ({title,genre,plot});
 movieModel.save()
 .then((insertMovie)=>{

   res.redirect('/');
 })

  if (!insertMovie.title || !insertMovie.plot || !insertMovie.genre) {

    return res.status(400).json({ msg: 'Please include a name, email and catchPhrase' });
  }

});


//Delete Movies

router.post('/movies/remove/:id', (req, res, next)=>{

  let movieId = req.params.id;
  movies.findByIdAndRemove(movieId)
  .then(()=>{

   res.redirect('/');

  })
  .catch((err)=>{

    next(err);
   
  })

})

//Update Movie view
router.get('/movies/editMovies/:id', (req, res, next)=>{
  movies.findById(req.params.id)
  .then((mEdit)=>{
          res.render('movies/editMovies', {mEdit})
  })
  .catch((err)=>{
      next(err);
  })
})

//Update Movie Entry
router.post('/movies/updateMovie/:id', (req, res, next)=>{
  let movieID = req.params.id;
  movies.findByIdAndUpdate(movieID, req.body)
  .then((movieUpdate)=>{
      res.redirect('/')
  })
  .catch((err)=>{
      next(err);
  })
})





module.exports = router;
